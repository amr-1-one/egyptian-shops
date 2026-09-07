/* =====================================================
   CONFIGURATION
===================================================== */

const OVERPASS_API = "https://overpass-api.de/api/interpreter";
const SEARCH_RADIUS = 5000;


/* =====================================================
   VARIABLES
===================================================== */

let map = null;
let userMarker = null;
let markers = [];
let allShops = [];
let currentCategory = "all";
let currentLocation = null;


/* =====================================================
   CATEGORY NAMES
===================================================== */

const categoryNames = {
    restaurant: "مطعم",
    sweets: "حلويات",
    market: "سوبر ماركت",
    shopping: "ملابس",
    cafe: "كافيه",
    pharmacy: "صيدلية",
    bakery: "مخبز",
    butcher: "جزارة",
    greengrocer: "خضار وفاكهة",
    electronics: "إلكترونيات",
    mobile_phone: "موبايلات",
    shoes: "أحذية",
    jewelry: "مجوهرات",
    furniture: "أثاث",
    cosmetics: "مستحضرات تجميل",
    books: "كتب",
    sports: "أدوات رياضية",
    department_store: "متجر كبير",
    hairdresser: "حلاق / كوافير",
    other: "مكان"
};


/* =====================================================
   INITIALIZE MAP
===================================================== */

function initializeMap() {

    const mapElement = document.getElementById("map");

    if (!mapElement) {
        console.error("لم يتم العثور على عنصر الخريطة.");
        return;
    }

    map = L.map("map").setView(
        [30.5877, 31.5020],
        13
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);
}


/* =====================================================
   LOADING
===================================================== */

function showLoading() {

    const loading = document.getElementById("mapLoading");

    if (loading) {
        loading.classList.remove("hidden");
    }
}


function hideLoading() {

    const loading = document.getElementById("mapLoading");

    if (loading) {
        loading.classList.add("hidden");
    }
}


/* =====================================================
   CLEAR MARKERS
===================================================== */

function clearMarkers() {

    markers.forEach(marker => {

        if (map) {
            map.removeLayer(marker);
        }

    });

    markers = [];
}


/* =====================================================
   USER LOCATION
===================================================== */

function loadUserLocation() {

    const button = document.getElementById("locationBtn");

    if (!button) {
        return;
    }

    /*
       التأكد أن المتصفح يدعم تحديد الموقع
    */

    if (!navigator.geolocation) {

        alert(
            "المتصفح لا يدعم تحديد الموقع."
        );

        return;
    }


    /*
       لازم الموقع يكون HTTPS
    */

    if (
        window.location.protocol !== "https:" &&
        window.location.hostname !== "localhost" &&
        window.location.hostname !== "127.0.0.1"
    ) {

        alert(
            "تحديد الموقع يحتاج أن يعمل الموقع عبر HTTPS."
        );

        return;
    }


    button.disabled = true;

    button.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        جاري تحديد الموقع...
    `;

    showLoading();


    /*
       طلب إذن الموقع
    */

    navigator.geolocation.getCurrentPosition(

        async function(position) {

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            console.log("الموقع الحالي:", lat, lng);


            currentLocation = {
                lat: lat,
                lng: lng
            };


            /*
               تحريك الخريطة للموقع
            */

            if (map) {

                map.setView(
                    [lat, lng],
                    15
                );

            }


            /*
               إزالة العلامة القديمة
            */

            if (userMarker && map) {

                map.removeLayer(userMarker);

            }


            /*
               وضع علامة على موقع المستخدم
            */

            userMarker = L.marker(
                [lat, lng]
            )
            .addTo(map)
            .bindPopup("أنت هنا")
            .openPopup();


            /*
               تحديث النص
            */

            const locationText =
                document.getElementById(
                    "currentLocationText"
                );

            if (locationText) {

                locationText.textContent =
                    "تم تحديد موقعك الحالي";

            }


            /*
               تحميل الأماكن القريبة
            */

            try {

                const elements =
                    await fetchNearbyPlaces(
                        lat,
                        lng
                    );

                allShops =
                    convertPlaces(elements);

                filterShops();

            } catch (error) {

                console.error(
                    "خطأ في تحميل الأماكن:",
                    error
                );

                alert(
                    "تم تحديد موقعك، لكن حدثت مشكلة في تحميل الأماكن القريبة."
                );

            }


            hideLoading();

            button.disabled = false;

            button.innerHTML = `
                <i class="fa-solid fa-location-crosshairs"></i>
                تم تحديد موقعي
            `;

        },


        /*
           في حالة فشل تحديد الموقع
        */

        function(error) {

            console.error(
                "Geolocation error:",
                error
            );

            hideLoading();

            button.disabled = false;

            button.innerHTML = `
                <i class="fa-solid fa-location-crosshairs"></i>
                موقعي الحالي
            `;


            let message =
                "لم نتمكن من تحديد موقعك.";


            switch (error.code) {

                case error.PERMISSION_DENIED:

                    message =
                        "تم رفض إذن الموقع. اسمح للموقع من إعدادات المتصفح ثم جرّب مرة أخرى.";

                    break;


                case error.POSITION_UNAVAILABLE:

                    message =
                        "تعذر الحصول على موقعك. تأكد من تشغيل خدمة الموقع في الهاتف.";

                    break;


                case error.TIMEOUT:

                    message =
                        "استغرق تحديد الموقع وقتًا طويلًا. حاول مرة أخرى.";

                    break;


                default:

                    message =
                        "حدث خطأ أثناء تحديد موقعك.";

            }


            alert(message);

        },


        /*
           إعدادات تحديد الموقع
        */

        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        }

    );

}


/* =====================================================
   OVERPASS
===================================================== */

async function fetchNearbyPlaces(lat, lng) {

    const query = `

        [out:json][timeout:30];

        (
            nwr(
                around:${SEARCH_RADIUS},
                ${lat},
                ${lng}
            )["shop"];

            nwr(
                around:${SEARCH_RADIUS},
                ${lat},
                ${lng}
            )["amenity"="restaurant"];

            nwr(
                around:${SEARCH_RADIUS},
                ${lat},
                ${lng}
            )["amenity"="cafe"];

            nwr(
                around:${SEARCH_RADIUS},
                ${lat},
                ${lng}
            )["amenity"="pharmacy"];
        );

        out center tags;

    `;

    const url =
        OVERPASS_API +
        "?data=" +
        encodeURIComponent(query);


    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            "Overpass API error: " +
            response.status
        );

    }


    const data =
        await response.json();


    return data.elements || [];
}


/* =====================================================
   CONVERT OSM DATA
===================================================== */

function convertPlaces(elements) {

    const result = [];

    elements.forEach(element => {

        const tags = element.tags || {};

        let lat = element.lat;
        let lng = element.lon;


        if (
            lat === undefined &&
            element.center
        ) {

            lat = element.center.lat;
            lng = element.center.lon;

        }


        if (
            lat === undefined ||
            lng === undefined
        ) {

            return;
        }


        const name =
            tags["name:ar"] ||
            tags.name ||
            tags["name:en"] ||
            "مكان بدون اسم";


        let category = "other";
        let categoryName = "مكان";


        if (tags.shop) {

            category =
                normalizeShopCategory(
                    tags.shop
                );

            categoryName =
                categoryNames[category] ||
                "محل";
        }


        if (
            tags.amenity ===
            "restaurant"
        ) {

            category = "restaurant";
            categoryName = "مطعم";
        }


        if (
            tags.amenity ===
            "cafe"
        ) {

            category = "cafe";
            categoryName = "كافيه";
        }


        if (
            tags.amenity ===
            "pharmacy"
        ) {

            category = "pharmacy";
            categoryName = "صيدلية";
        }


        const phone =
            tags.phone ||
            tags["contact:phone"] ||
            tags["contact:mobile"] ||
            "";


        const website =
            tags.website ||
            tags["contact:website"] ||
            "";


        const address =
            buildAddress(tags);


        result.push({

            id:
                `${element.type}-${element.id}`,

            name: name,

            category: category,

            categoryName: categoryName,

            lat: Number(lat),

            lng: Number(lng),

            phone: phone,

            website: website,

            address: address,

            image:
                tags.image ||
                null

        });

    });


    return removeDuplicates(result);
}


/* =====================================================
   CATEGORY NORMALIZATION
===================================================== */

function normalizeShopCategory(shopType) {

    const types = {

        supermarket: "market",
        convenience: "market",
        grocery: "market",

        clothes: "shopping",
        fashion: "shopping",

        confectionery: "sweets",

        bakery: "bakery",
        butcher: "butcher",
        greengrocer: "greengrocer",

        electronics: "electronics",
        mobile_phone: "mobile_phone",

        shoes: "shoes",
        jewelry: "jewelry",
        furniture: "furniture",
        cosmetics: "cosmetics",
        books: "books",
        sports: "sports",

        department_store:
            "department_store",

        hairdresser:
            "hairdresser"
    };


    return (
        types[shopType] ||
        shopType ||
        "other"
    );
}


/* =====================================================
   ADDRESS
===================================================== */

function buildAddress(tags) {

    const parts = [];

    if (tags["addr:street"]) {
        parts.push(
            tags["addr:street"]
        );
    }

    if (tags["addr:suburb"]) {
        parts.push(
            tags["addr:suburb"]
        );
    }

    if (tags["addr:city"]) {
        parts.push(
            tags["addr:city"]
        );
    }

    return parts.join(" - ");
}


/* =====================================================
   REMOVE DUPLICATES
===================================================== */

function removeDuplicates(places) {

    const seen = new Set();

    return places.filter(place => {

        const key =
            `${place.name}-${place.lat.toFixed(5)}-${place.lng.toFixed(5)}`;


        if (seen.has(key)) {
            return false;
        }


        seen.add(key);

        return true;
    });
}


/* =====================================================
   ADD MARKER
===================================================== */

function addShopMarker(shop) {

    if (!map) {
        return;
    }


    const marker =
        L.marker([
            shop.lat,
            shop.lng
        ]).addTo(map);


    const directionsURL =
        `https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}`;


    const phoneHTML =
        shop.phone
            ? `
                <a
                    href="tel:${escapeAttribute(shop.phone)}"
                    class="popup-button"
                >
                    <i class="fa-solid fa-phone"></i>
                    اتصال
                </a>
            `
            : "";


    const popupHTML = `

        <div class="custom-popup">

            <div class="popup-title">
                ${escapeHTML(shop.name)}
            </div>

            <div class="popup-category">
                ${escapeHTML(shop.categoryName)}
            </div>

            ${
                shop.address
                    ? `
                        <div class="popup-address">
                            <i class="fa-solid fa-location-dot"></i>
                            ${escapeHTML(shop.address)}
                        </div>
                    `
                    : ""
            }

            ${
                shop.phone
                    ? `
                        <div class="popup-phone">
                            <i class="fa-solid fa-phone"></i>
                            ${escapeHTML(shop.phone)}
                        </div>
                    `
                    : ""
            }

            <div class="popup-buttons">

                ${phoneHTML}

                <a
                    href="${directionsURL}"
                    target="_blank"
                    rel="noopener"
                    class="popup-button secondary"
                >
                    <i class="fa-solid fa-route"></i>
                    الاتجاهات
                </a>

            </div>

        </div>

    `;


    marker.bindPopup(popupHTML);

    markers.push(marker);
}


/* =====================================================
   SHOW MARKERS
===================================================== */

function showMarkers(shopList) {

    clearMarkers();

    shopList.forEach(shop => {
        addShopMarker(shop);
    });
}


/* =====================================================
   RENDER SHOPS
===================================================== */

function renderShops(shopList) {

    const grid =
        document.getElementById(
            "shopsGrid"
        );

    const count =
        document.getElementById(
            "resultsCount"
        );


    if (!grid || !count) {
        return;
    }


    count.textContent =
        shopList.length;


    grid.innerHTML = "";


    if (shopList.length === 0) {

        grid.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-store-slash"></i>

                <h3>
                    مفيش أماكن لحد دلوقتي
                </h3>

                <p>
                    جرب البحث في منطقة أخرى
                    أو اختار تصنيف مختلف.
                </p>

            </div>

        `;

        return;
    }


    shopList
        .slice(0, 30)
        .forEach(shop => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "shop-card";


            const directions =
                `https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}`;


            const phoneButton =
                shop.phone
                    ? `
                        <a
                            href="tel:${escapeAttribute(shop.phone)}"
                        >
                            <i class="fa-solid fa-phone"></i>
                            اتصال
                        </a>
                    `
                    : "";


            card.innerHTML = `

                <div class="shop-image">

                    ${
                        shop.image
                            ? `
                                <img
                                    src="${escapeAttribute(shop.image)}"
                                    alt="${escapeAttribute(shop.name)}"
                                    loading="lazy"
                                >
                            `
                            : `
                                <div class="shop-image-placeholder">
                                    <i class="fa-solid fa-store"></i>
                                </div>
                            `
                    }

                    <span class="shop-category">
                        ${escapeHTML(shop.categoryName)}
                    </span>

                </div>


                <div class="shop-info">

                    <h3>
                        ${escapeHTML(shop.name)}
                    </h3>


                    ${
                        shop.address
                            ? `
                                <div class="shop-address">

                                    <i class="fa-solid fa-location-dot"></i>

                                    <span>
                                        ${escapeHTML(shop.address)}
                                    </span>

                                </div>
                            `
                            : ""
                    }


                    ${
                        shop.phone
                            ? `
                                <div class="shop-address">

                                    <i class="fa-solid fa-phone"></i>

                                    <span>
                                        ${escapeHTML(shop.phone)}
                                    </span>

                                </div>
                            `
                            : ""
                    }


                    <div class="shop-meta">

                        <span class="rating">

                            <i class="fa-solid fa-location-dot"></i>

                            مكان قريب

                        </span>


                        <span class="distance">

                            ${calculateDistanceText(shop)}

                        </span>

                    </div>


                    <div class="shop-actions">

                        ${phoneButton}

                        <a
                            href="${directions}"
                            target="_blank"
                            rel="noopener"
                        >

                            <i class="fa-solid fa-route"></i>

                            الاتجاهات

                        </a>

                    </div>

                </div>

            `;


            grid.appendChild(card);

        });
}


/* =====================================================
   FILTER
===================================================== */

function filterShops() {

    const input =
        document.getElementById(
            "searchInput"
        );


    const search =
        input
            ? input.value.trim().toLowerCase()
            : "";


    const filtered =
        allShops.filter(shop => {

            const matchesCategory =
                currentCategory === "all" ||
                shop.category === currentCategory;


            const text =
                `${shop.name} ${shop.categoryName} ${shop.address}`
                    .toLowerCase();


            const matchesSearch =
                search === "" ||
                text.includes(search);


            return (
                matchesCategory &&
                matchesSearch
            );
        });


    renderShops(filtered);

    showMarkers(filtered);
}


/* =====================================================
   DISTANCE
===================================================== */

function calculateDistanceText(shop) {

    if (!currentLocation) {
        return "";
    }


    const distance =
        calculateDistance(
            currentLocation.lat,
            currentLocation.lng,
            shop.lat,
            shop.lng
        );


    if (distance < 1) {

        return `${Math.round(distance * 1000)} متر`;
    }


    return `${distance.toFixed(1)} كم`;
}


function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R = 6371;

    const dLat =
        toRadians(lat2 - lat1);

    const dLon =
        toRadians(lon2 - lon1);


    const a =
        Math.sin(dLat / 2) *
        Math.sin(dLat / 2)

        +

        Math.cos(
            toRadians(lat1)
        )

        *

        Math.cos(
            toRadians(lat2)
        )

        *

        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return R * c;
}


function toRadians(degrees) {

    return degrees *
        Math.PI /
        180;
}


/* =====================================================
   AREA SEARCH
===================================================== */

async function searchArea() {

    const input =
        document.getElementById(
            "areaInput"
        );


    if (!input) {
        return;
    }


    const area =
        input.value.trim();


    if (!area) {

        alert(
            "اكتب اسم المنطقة أولًا."
        );

        return;
    }


    showLoading();


    try {

        const location =
            await geocodeArea(area);


        if (!location) {

            alert(
                "لم نتمكن من العثور على المنطقة."
            );

            hideLoading();

            return;
        }


        const lat = location.lat;
        const lng = location.lng;


        currentLocation = {
            lat: lat,
            lng: lng
        };


        map.setView(
            [lat, lng],
            14
        );


        const locationText =
            document.getElementById(
                "currentLocationText"
            );


        if (locationText) {

            locationText.textContent =
                `الموقع: ${location.name}`;

        }


        if (userMarker) {

            map.removeLayer(
                userMarker
            );

        }


        userMarker =
            L.marker([
                lat,
                lng
            ])
            .addTo(map)
            .bindPopup(location.name);


        const elements =
            await fetchNearbyPlaces(
                lat,
                lng
            );


        allShops =
            convertPlaces(elements);


        currentCategory = "all";


        const searchInput =
            document.getElementById(
                "searchInput"
            );


        if (searchInput) {
            searchInput.value = "";
        }


        updateActiveCategory();

        filterShops();


    } catch (error) {

        console.error(error);

        alert(
            "حدث خطأ أثناء البحث عن المنطقة."
        );

    }


    hideLoading();
}


/* =====================================================
   GEOCODING
===================================================== */

async function geocodeArea(area) {

    const url =
        "https://nominatim.openstreetmap.org/search" +
        "?format=json" +
        "&limit=1" +
        "&countrycodes=eg" +
        "&accept-language=ar" +
        "&q=" +
        encodeURIComponent(area);


    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            "Geocoding failed"
        );
    }


    const data =
        await response.json();


    if (!data.length) {
        return null;
    }


    return {

        lat:
            parseFloat(
                data[0].lat
            ),

        lng:
            parseFloat(
                data[0].lon
            ),

        name:
            data[0].display_name

    };
}


/* =====================================================
   CATEGORY BUTTONS
===================================================== */

function setupCategoryButtons() {

    const buttons =
        document.querySelectorAll(
            ".quick-category, .category-card"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentCategory =
                    button.dataset.category;


                updateActiveCategory();

                filterShops();


                const explore =
                    document.getElementById(
                        "explore"
                    );


                if (explore) {

                    explore.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });
}


/* =====================================================
   ACTIVE CATEGORY
===================================================== */

function updateActiveCategory() {

    document
        .querySelectorAll(
            ".quick-category"
        )
        .forEach(button => {

            button.classList.remove(
                "active"
            );


            if (
                button.dataset.category ===
                currentCategory
            ) {

                button.classList.add(
                    "active"
                );

            }

        });
}


/* =====================================================
   SEARCH
===================================================== */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        filterShops
    );
}


/* =====================================================
   SHOW ALL
===================================================== */

function setupShowAll() {

    const button =
        document.getElementById(
            "showAllBtn"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            currentCategory = "all";


            const input =
                document.getElementById(
                    "searchInput"
                );


            if (input) {
                input.value = "";
            }


            updateActiveCategory();

            filterShops();

        }
    );
}


/* =====================================================
   AREA SEARCH SETUP
===================================================== */

function setupAreaSearch() {

    const button =
        document.getElementById(
            "areaSearchBtn"
        );


    const input =
        document.getElementById(
            "areaInput"
        );


    if (button) {

        button.addEventListener(
            "click",
            searchArea
        );

    }


    if (input) {

        input.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    searchArea();

                }

            }
        );

    }
}


/* =====================================================
   LOCATION BUTTON SETUP
===================================================== */

function setupLocationButton() {

    const button =
        document.getElementById(
            "locationBtn"
        );


    if (!button) {

        console.error(
            "زر موقعي الحالي غير موجود."
        );

        return;
    }


    button.addEventListener(
        "click",
        loadUserLocation
    );
}


/* =====================================================
   MOBILE MENU
===================================================== */

function setupMobileMenu() {

    const menu =
        document.getElementById(
            "mobileMenu"
        );

    const open =
        document.getElementById(
            "mobileMenuBtn"
        );

    const close =
        document.getElementById(
            "closeMenu"
        );


    if (!menu || !open || !close) {
        return;
    }


    open.addEventListener(
        "click",
        () => {

            menu.classList.add(
                "active"
            );

        }
    );


    close.addEventListener(
        "click",
        () => {

            menu.classList.remove(
                "active"
            );

        }
    );


    menu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "active"
                    );

                }
            );

        });
}


/* =====================================================
   ADD SHOP
===================================================== */

function setupAddShop() {

    const button =
        document.getElementById(
            "addShopBtn"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            alert(
                "صفحة إضافة المحل سيتم ربطها بقاعدة البيانات في المرحلة التالية."
            );

        }
    );
}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function escapeAttribute(value) {

    return escapeHTML(value);
}


/* =====================================================
   START WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeMap();

        setupCategoryButtons();

        setupSearch();

        setupShowAll();

        setupMobileMenu();

        setupAreaSearch();

        setupLocationButton();

        setupAddShop();

        updateActiveCategory();

    }
);
