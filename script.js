/* =====================================================
   محلات مصر - SCRIPT.JS
===================================================== */

"use strict";

/* =====================================================
   CONFIG
===================================================== */

const CONFIG = {
    defaultLocation: {
        lat: 30.2997,
        lng: 31.7449,
        zoom: 14
    },

    geocodeDelay: 1100,

    nominatimUrl:
        "https://nominatim.openstreetmap.org/search",

    mapTileUrl:
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

    mapAttribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
};


/* =====================================================
   CATEGORY CONFIG
===================================================== */

const CATEGORY_CONFIG = {

    all: {
        name: "الكل",
        icon: "fa-solid fa-location-dot",
        color: "#2563eb"
    },

    restaurant: {
        name: "مطاعم",
        icon: "fa-solid fa-utensils",
        color: "#ef4444"
    },

    sweets: {
        name: "حلويات",
        icon: "fa-solid fa-cake-candles",
        color: "#ec4899"
    },

    market: {
        name: "سوبر ماركت",
        icon: "fa-solid fa-cart-shopping",
        color: "#16a34a"
    },

    shopping: {
        name: "ملابس",
        icon: "fa-solid fa-shirt",
        color: "#8b5cf6"
    },

    cafe: {
        name: "كافيهات",
        icon: "fa-solid fa-mug-hot",
        color: "#92400e"
    },

    pharmacy: {
        name: "صيدليات",
        icon: "fa-solid fa-prescription-bottle-medical",
        color: "#0891b2"
    }
};


/* =====================================================
   MANUAL SHOPS
===================================================== */

const MANUAL_SHOPS = [

    /* =================================================
       ب لبن
    ================================================= */

    {
        id: "brand-blaban-10th",

        name: "ب لبن",

        category: "sweets",

        lat: 30.2997,
        lng: 31.7449,

        categoryName: "حلويات",

        phone: "15761",

        address:
            "طريق الأردنية، بجوار معرض سيراميكا كليوباترا، بالقرب من السجل المدني والمطافي، أول العاشر من رمضان، الشرقية",

        menuUrl:
            "https://www.talabat.com/ar/egypt/restaurant/793179/blaban-10th-of-ramadan?aid=10027",

        menu: {

            "دنيا الأرز": [

                {
                    name: "أرز بلبن سادة",
                    description:
                        "أرز بلبن سادة محضر من حليب طازج",
                    price: "35 جنيه"
                },

                {
                    name: "أرز بلبن مكسرات",
                    description:
                        "أرز بلبن مع مكسرات",
                    price: "70 جنيه"
                },

                {
                    name: "أرز بلبن مانجو",
                    description:
                        "أرز بلبن مع قطع مانجو فريش",
                    price: "70 جنيه"
                },

                {
                    name: "أرز قشطة مكسرات",
                    description:
                        "أرز بلبن مع قشطة ومكسرات",
                    price: "85 جنيه"
                }
            ],

            "دنيا القشطوطة": [

                {
                    name: "قشطوطة أرز بلبن كريمة",
                    description:
                        "أرز بلبن وكيك فادج وطبقة كريمة",
                    price: "80 جنيه"
                },

                {
                    name: "قشطوطة أرز بلبن مانجا",
                    description:
                        "أرز بلبن وكيك فادج وكريمة وقطع مانجو",
                    price: "105 جنيه"
                },

                {
                    name: "قشطوطة كريمة",
                    description:
                        "كيك فادج مع طبقة كريمة",
                    price: "80 جنيه"
                },

                {
                    name: "قشطوطة مانجا",
                    description:
                        "كيك فادج مع كريمة وقطع مانجو",
                    price: "105 جنيه"
                }
            ],

            "دنيا الكشري": [

                {
                    name: "كشري مانجو كبير",
                    description:
                        "أرز وكنافة وكريمة ومانجو وجلاش",
                    price: "105 جنيه"
                },

                {
                    name: "كشري نوتيلا كبير",
                    description:
                        "أرز وكنافة وكريمة ونوتيلا وجلاش",
                    price: "100 جنيه"
                },

                {
                    name: "كشري بيستاشيو كبير",
                    description:
                        "أرز وكنافة وكريمة وصوص بيستاشيو وجلاش",
                    price: "115 جنيه"
                },

                {
                    name: "كشري كيندر كبير",
                    description:
                        "أرز وكنافة وكريمة وشوكولاتة كيندر وجلاش",
                    price: "110 جنيه"
                },

                {
                    name: "كشري نوتيلا صغير",
                    description:
                        "أرز وكنافة وكريمة ونوتيلا وجلاش",
                    price: "70 جنيه"
                }
            ],

            "دنيا دبي": [

                {
                    name: "سنكوريتا كبيرة أوي",
                    description:
                        "نوجا وكراميل وفول سوداني وكيك فادج وتغليفة شوكولاتة",
                    price: "125 جنيه"
                },

                {
                    name: "كريب دبي",
                    description:
                        "كريب محمص مع كنافة بيستاشيو ونوتيلا",
                    price: "145 جنيه"
                },

                {
                    name: "كيك هبة دبي شيكولاتة وسط",
                    description:
                        "كيكة فادج مع كنافة وبيستاشيو وصوص شوكولاتة",
                    price: "170 جنيه"
                },

                {
                    name: "كيك هبة دبي كيندر وسط",
                    description:
                        "كيكة فادج مع كنافة وبيستاشيو وصوص كندر",
                    price: "150 جنيه"
                }
            ],

            "دنيا أم علي": [

                {
                    name: "أم علي بالسمنة البلدي",
                    description:
                        "طاجن أم علي بالحليب الساخن والسمن البلدي",
                    price: "50 جنيه"
                },

                {
                    name: "أم علي بالسمنة البلدي والمكسرات",
                    description:
                        "أم علي مع مكسرات مشكلة محمصة",
                    price: "80 جنيه"
                },

                {
                    name: "أم علي بالسمنة البلدي والقشطة",
                    description:
                        "أم علي مع طبقة قشطة طازجة",
                    price: "70 جنيه"
                },

                {
                    name: "أم علي بالقشطة والمكسرات",
                    description:
                        "أم علي مع قشطة ومكسرات",
                    price: "100 جنيه"
                }
            ],

            "دنيا العصير": [

                {
                    name: "امبو بيستاشيو",
                    description:
                        "جيلاتو إيطالي وحليب مكثف وصوصات ب لبن",
                    price: "115 جنيه"
                },

                {
                    name: "امبو بندق",
                    description:
                        "جيلاتو إيطالي وحليب مكثف وصوصات ب لبن",
                    price: "105 جنيه"
                },

                {
                    name: "امبو شيكولاتة",
                    description:
                        "جيلاتو إيطالي وحليب مكثف وصوصات ب لبن",
                    price: "105 جنيه"
                },

                {
                    name: "امبو مانجو",
                    description:
                        "جيلاتو إيطالي وحليب مكثف وصوصات ب لبن",
                    price: "105 جنيه"
                }
            ]
        }
    },


    /* =================================================
       وهمي برجر
    ================================================= */

    {
        id: "brand-wahmy-10th",

        name: "وهمي برجر",

        category: "restaurant",

        lat: 30.2999,
        lng: 31.7447,

        categoryName: "مطاعم",

        phone: "19905",

        address:
            "العاشر من رمضان، الشرقية",

        menuUrl:
            "https://www.talabat.com/ar/egypt/restaurant/795132/wahmy-burger-10th-of-ramadan--7th-district?aid=7920",

        menu: {

            "اختيارات على ذوقك": [

                {
                    name: "أبطال المونديال - بيف",
                    description:
                        "ساندويتش أنجوس بيف + بطاطس + مشروب",
                    price: "170 جنيه"
                },

                {
                    name: "أبطال المونديال - تشيكن",
                    description:
                        "ساندويتش دجاج + بطاطس + مشروب",
                    price: "150 جنيه"
                },

                {
                    name: "كورن ريبس",
                    description:
                        "ضلوع ذرة مقلية متبلة",
                    price: "55 جنيه"
                },

                {
                    name: "بطاطس",
                    description:
                        "بطاطس مقلية",
                    price: "55 جنيه"
                }
            ]
        }
    },


    /* =================================================
       بازوكا
    ================================================= */

    {
        id: "brand-bazooka-10th",

        name: "بازوكا",

        category: "restaurant",

        lat: 30.3003,
        lng: 31.7444,

        categoryName: "مطاعم",

        phone: "16455",

        address:
            "العاشر من رمضان، الشرقية",

        menuUrl:
            "https://www.talabat.com/ar/egypt/restaurant/786114/bazooka-10th-of-ramadan--7th-district?aid=7898",

        menu: {

            "وجبات": [

                {
                    name: "وجبة بازوكا سناك بوكس",
                    description:
                        "دجاج + خبز + فرايز",
                    price: "140 جنيه"
                },

                {
                    name: "كينج بوكس",
                    description:
                        "ساندويتش + قطعة دجاج + فرايز + كول سلو + مشروب",
                    price: "260 جنيه"
                },

                {
                    name: "ريزو",
                    description:
                        "أرز بالبهارات مع قطع الدجاج",
                    price: "110 جنيه"
                },

                {
                    name: "راب بوكس",
                    description:
                        "راب + قطعة تشكن + فرايز + كول سلو + مشروب",
                    price: "235 جنيه"
                }
            ],

            "ساندويتشات وإضافات": [

                {
                    name: "تشيكن فاير بازوكا",
                    description:
                        "زنجر سبايسي مع صوص حار وخس وطماطم وجبنة",
                    price: "205 جنيه"
                },

                {
                    name: "بيج فاير بازوكا",
                    description:
                        "دجاج كرسبي حار مع جبنة وتركي وهالبينو",
                    price: "205 جنيه"
                },

                {
                    name: "بطاطس وسط",
                    description:
                        "بطاطس",
                    price: "55 جنيه"
                },

                {
                    name: "تشيزي فرايز",
                    description:
                        "فرايز مع صوص جبنة",
                    price: "90 جنيه"
                }
            ]
        }
    },


    /* =================================================
       باقي المطاعم
    ================================================= */

    {
        id: "restaurant-mcdonalds-10th",
        name: "ماكدونالدز",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "19991",
        address:
            "طريق مصر إسماعيلية الصحراوي، داخل محطة بنزين توتال، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-kfc-10th",
        name: "كنتاكي",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "19019",
        address:
            "كم 52.5 طريق القاهرة الإسماعيلية الصحراوي، أمام سيراميكا كليوباترا جروب، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-cookdoor-10th",
        name: "كوك دوور",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "16999",
        address:
            "كم 52 طريق القاهرة الإسماعيلية، داخل محمد ثروت مول، الدور الأرضي، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-pizzahut-10th",
        name: "بيتزا هت",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "0554412917",
        address:
            "كم 52 طريق مصر إسماعيلية الصحراوي، بجوار كنتاكي، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-prego-10th",
        name: "بريجو",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "16121",
        address:
            "المجاورة التاسعة، خلف نادي الرواد، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-shabrawy-10th",
        name: "الشبراوي",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "0554362030",
        address:
            "الحي الأول، مركز المدينة، بجوار المعهد التكنولوجي العالي HTI، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-baltagy-10th",
        name: "البلتاجي للمأكولات البحرية",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "0554351635",
        address:
            "محور أبو بكر الصديق، الأردنية، داخل مجمع نجوم الصفا، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-hadramout-10th",
        name: "مطعم حضرموت الحلبى",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "0554490247",
        address:
            "2 عمارات الأردنية، المرحلة د، الأردنية، أمام محطة الأتوبيس، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-dragonwalk-10th",
        name: "دراجون ووك",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "01011796704",
        address:
            "المجاورة 19، ميدان السفيرة، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-om-hassan-10th",
        name: "مطعم أم حسن",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "19500",
        address:
            "مجمع البنوك، أمام نادي الرواد الرياضي الاجتماعي، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-wildburger-10th",
        name: "وايلد برجر",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "01206227645",
        address:
            "المجاورة 18، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-citycrepe-10th",
        name: "سيتي كريب",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "01093453845",
        address:
            "فيلا 2، المجاورة الثانية، أمام كافيه تحويجة، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-qesem-bey-10th",
        name: "قاسم بيك",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "01008758765",
        address:
            "شارع السنترال، الأردنية، داخل مول الصباح، الدور الأول، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-roma-10th",
        name: "روما فاست فود",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "01028245555",
        address:
            "شارع الإمام الشافعي، المجاورة 19، بجوار سوبر ماركت بيم، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-ketma-10th",
        name: "مطعم قطمة",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "01006930006",
        address:
            "الأردنية، مركز المدينة، داخل سيتي مول، برج 3، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-nemo-10th",
        name: "أسماك نيمو",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "01001123551",
        address:
            "شارع إبراهيم حسين، متفرع من شارع أبو بكر الصديق، العاشر من رمضان، الشرقية"
    },

    {
        id: "restaurant-layaly-elsham-10th",
        name: "ليالي الشام",
        category: "restaurant",
        categoryName: "مطاعم",
        phone: "01114007871",
        address:
            "شارع عمار بن ياسر، بجوار منار ماركت، العاشر من رمضان، الشرقية"
    },


    /* =================================================
       MARKETS
    ================================================= */

    {
        id: "market-shorayni-10th",
        name: "الشريني ماركت",
        category: "market",
        categoryName: "سوبر ماركت",
        address:
            "الحي العاشر، العاشر من رمضان، الشرقية"
    },

    {
        id: "market-barka-10th",
        name: "البركة ماركت",
        category: "market",
        categoryName: "سوبر ماركت",
        address:
            "الحي 12، عمائر ص، العاشر من رمضان، الشرقية"
    },

    {
        id: "market-kheir-marina-10th",
        name: "خير ومارينا",
        category: "market",
        categoryName: "سوبر ماركت",
        address:
            "مصر النور، العاشر من رمضان، الشرقية"
    },


    /* =================================================
       PHARMACIES
    ================================================= */

    {
        id: "pharmacy-d-samuel-samy-10th",
        name: "صيدلية د. صموئيل سامي",
        category: "pharmacy",
        categoryName: "صيدليات",
        address:
            "شارع السنترال، الأردنية، داخل سنتر المباركية، الدور الأرضي، العاشر من رمضان، الشرقية"
    },

    {
        id: "pharmacy-d-tarek-abdelmonem-10th",
        name: "صيدلية د. طارق عبد المنعم",
        category: "pharmacy",
        categoryName: "صيدليات",
        address:
            "25 المجاورة 66، العاشر من رمضان، الشرقية، بجوار دريم للدش، محل رقم 2"
    },

    {
        id: "pharmacy-d-walaa-eldin-10th",
        name: "صيدلية د. ولاء الدين",
        category: "pharmacy",
        categoryName: "صيدليات",
        address:
            "المجاورة السابعة، تقسيم الشرطة، العاشر من رمضان، بجوار مستشفى شرف التخصصي"
    },

    {
        id: "pharmacy-refai-10th",
        name: "صيدلية رفاعي",
        category: "pharmacy",
        categoryName: "صيدليات",
        address:
            "القطعة 43، الأردنية، العاشر من رمضان، داخل مجمع عبد المقصود التجاري، مبنى 10"
    },

    {
        id: "pharmacy-san-boula-10th",
        name: "صيدلية سان بولا",
        category: "pharmacy",
        categoryName: "صيدليات",
        address:
            "الحي الأول، مركز المدينة، داخل سنتر الحي الأول التجاري، مبنى عمر بن الخطاب، الدور الأرضي، العاشر من رمضان، الشرقية"
    },

    {
        id: "pharmacy-ghanem-10th",
        name: "صيدلية غانم",
        category: "pharmacy",
        categoryName: "صيدليات",
        address:
            "الأردنية، مركز المدينة، داخل المصرية سنتر 1، مدخل و، محل 11، العاشر من رمضان، الشرقية"
    },

    {
        id: "pharmacy-harvey-hany-10th",
        name: "صيدلية هارفي هاني",
        category: "pharmacy",
        categoryName: "صيدليات",
        address:
            "القطعة 45، المجاورة الأولى، العاشر من رمضان، بجوار كنيسة السيدة العذراء مريم"
    },


    /* =================================================
       SWEETS
    ================================================= */

    {
        id: "sweet-royal-sweet-10th",
        name: "رويال سويت",
        category: "sweets",
        categoryName: "حلويات",
        phone: "0554410530",
        address:
            "المنطقة الصناعية الثالثة، أمام شركة مصر للطيران، العاشر من رمضان، الشرقية"
    },

    {
        id: "sweet-choco-planet-10th",
        name: "شوكو بلانت",
        category: "sweets",
        categoryName: "حلويات",
        phone: "01005271235",
        address:
            "شارع أبو بكر الصديق، الأردنية، مركز المدينة، داخل دلتا سنتر، عمارة 4، مكتب 3، العاشر من رمضان، الشرقية"
    },

    {
        id: "sweet-bonboneta-10th",
        name: "مجموعة بونبونيتا للمخبوزات والحلوى الجافة",
        category: "sweets",
        categoryName: "حلويات",
        phone: "01221660792",
        address:
            "مجاورة 25، مجمع الصناعات الصغيرة، العاشر من رمضان، الشرقية"
    },

    {
        id: "sweet-aytib-shamy-10th",
        name: "حلويات أطيب شامي",
        category: "sweets",
        categoryName: "حلويات",
        phone: "01120460237",
        address:
            "الحي الأول، مركز المدينة، داخل سنتر الحي الأول التجاري، الدور الأرضي، العاشر من رمضان، الشرقية"
    },

    {
        id: "sweet-jam-10th",
        name: "جام",
        category: "sweets",
        categoryName: "حلويات",
        phone: "01007890740",
        address:
            "القطعة 17، المنطقة الصناعية، خلف الشركة الشرقية لصناعة الحلويات والشيكولاتة، العاشر من رمضان، الشرقية"
    },

    {
        id: "sweet-golden-star-10th",
        name: "جولدن ستار لصناعة الشيكولاتة والحلويات",
        category: "sweets",
        categoryName: "حلويات",
        phone: "01012023914",
        address:
            "قطعة 39 أ، المنطقة الصناعية بالروبيكي، بجوار الميناء الجاف، العاشر من رمضان، الشرقية"
    }
];


/* =====================================================
   STATE
===================================================== */

let map = null;

let userMarker = null;

let accuracyCircle = null;

let markersLayer = null;

let currentCategory = "all";

let currentSearch = "";

let currentArea = "";

let userLocation = null;

let geocodingInProgress = false;


/* =====================================================
   DOM
===================================================== */

const searchInput =
    document.getElementById("searchInput");

const areaInput =
    document.getElementById("areaInput");

const areaSearchBtn =
    document.getElementById("areaSearchBtn");

const locationBtn =
    document.getElementById("locationBtn");

const shopsGrid =
    document.getElementById("shopsGrid");

const resultsCount =
    document.getElementById("resultsCount");

const mapLoading =
    document.getElementById("mapLoading");

const loadingText =
    document.getElementById("loadingText");

const currentLocationText =
    document.getElementById("currentLocationText");

const showAllBtn =
    document.getElementById("showAllBtn");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const closeMenu =
    document.getElementById("closeMenu");

const mobileMenu =
    document.getElementById("mobileMenu");

const addShopBtn =
    document.getElementById("addShopBtn");


/* =====================================================
   INIT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    init
);


function init() {

    initMap();

    setupEvents();

    renderLegend();

    renderShops();

    updateResultsCount();

    hideMapLoading();

    startGeocoding();
}


/* =====================================================
   MAP
===================================================== */

function initMap() {

    const mapElement =
        document.getElementById("map");

    if (!mapElement) {
        return;
    }


    if (
        typeof L === "undefined"
    ) {

        console.error(
            "Leaflet library is not loaded."
        );

        return;
    }


    map =
        L.map(
            "map",
            {
                zoomControl: true
            }
        )
        .setView(
            [
                CONFIG.defaultLocation.lat,
                CONFIG.defaultLocation.lng
            ],
            CONFIG.defaultLocation.zoom
        );


    L.tileLayer(
        CONFIG.mapTileUrl,
        {
            attribution:
                CONFIG.mapAttribution,

            maxZoom: 19
        }
    )
    .addTo(map);


    markersLayer =
        L.layerGroup()
            .addTo(map);


    renderMapMarkers();
}


/* =====================================================
   EVENTS
===================================================== */

function setupEvents() {

    /* =================================================
       SEARCH
    ================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            debounce(
                function () {

                    currentSearch =
                        searchInput.value
                            .trim()
                            .toLowerCase();

                    renderShops();

                    renderMapMarkers();

                },
                250
            )
        );
    }


    /* =================================================
       AREA SEARCH
    ================================================= */

    if (areaSearchBtn) {

        areaSearchBtn.addEventListener(
            "click",
            searchArea
        );
    }


    if (areaInput) {

        areaInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    searchArea();
                }

            }
        );
    }


    /* =================================================
       CURRENT LOCATION
    ================================================= */

    if (locationBtn) {

        locationBtn.addEventListener(
            "click",
            getCurrentLocation
        );
    }


    /* =================================================
       SHOW ALL
    ================================================= */

    if (showAllBtn) {

        showAllBtn.addEventListener(
            "click",
            function () {

                currentCategory =
                    "all";

                currentSearch =
                    "";

                currentArea =
                    "";


                if (searchInput) {
                    searchInput.value = "";
                }

                if (areaInput) {
                    areaInput.value = "";
                }


                document
                    .querySelectorAll(
                        ".quick-category, .category-card, .legend-item"
                    )
                    .forEach(
                        button => {

                            button.classList.remove(
                                "active"
                            );
                        }
                    );


                const allButton =
                    document.querySelector(
                        '[data-category="all"]'
                    );


                if (allButton) {
                    allButton.classList.add(
                        "active"
                    );
                }


                renderShops();

                renderMapMarkers();

                scrollToExplore();
            }
        );
    }


    /* =================================================
       QUICK CATEGORIES
    ================================================= */

    document
        .querySelectorAll(
            ".quick-category"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        const category =
                            this.dataset.category;

                        selectCategory(
                            category
                        );

                        scrollToExplore();
                    }
                );

            }
        );


    /* =================================================
       MAIN CATEGORIES
    ================================================= */

    document
        .querySelectorAll(
            ".category-card"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        const category =
                            this.dataset.category;

                        selectCategory(
                            category
                        );

                        scrollToExplore();
                    }
                );

            }
        );


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (mobileMenuBtn) {

        mobileMenuBtn.addEventListener(
            "click",
            openMobileMenu
        );
    }


    if (closeMenu) {

        closeMenu.addEventListener(
            "click",
            closeMobileMenu
        );
    }


    document
        .querySelectorAll(
            ".mobile-menu a"
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            }
        );


    /* =================================================
       ADD SHOP
    ================================================= */

    if (addShopBtn) {

        addShopBtn.addEventListener(
            "click",
            function () {

                alert(
                    "ميزة إضافة المحل جاهزة للربط بقاعدة بيانات أو نموذج تسجيل."
                );

            }
        );
    }


    /* =================================================
       ESC
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeMenuModal();

                closeMobileMenu();
            }

        }
    );
}


/* =====================================================
   CATEGORY
===================================================== */

function selectCategory(category) {

    currentCategory =
        CATEGORY_CONFIG[category]
            ? category
            : "all";


    document
        .querySelectorAll(
            ".quick-category, .category-card, .legend-item"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.category ===
                        currentCategory
                );

            }
        );


    renderShops();

    renderMapMarkers();

    updateResultsCount();
}


/* =====================================================
   FILTER
   IMPORTANT:
   عند وجود موقع المستخدم:
   يتم ترتيب جميع المحلات بعد الفلترة
   من الأقرب إلى الأبعد بغض النظر عن التصنيف.
===================================================== */

function getFilteredShops() {

    let shops =
        MANUAL_SHOPS.filter(
            shop => {

                const categoryMatch =
                    currentCategory === "all" ||
                    shop.category ===
                        currentCategory;


                const searchText =
                    currentSearch
                        .toLowerCase();


                const searchableText = [

                    shop.name || "",

                    shop.categoryName || "",

                    shop.address || ""

                ]
                    .join(" ")
                    .toLowerCase();


                const searchMatch =
                    !searchText ||
                    searchableText.includes(
                        searchText
                    );


                const areaMatch =
                    !currentArea ||
                    searchableText.includes(
                        currentArea.toLowerCase()
                    );


                return (
                    categoryMatch &&
                    searchMatch &&
                    areaMatch
                );
            }
        );


    /*
       =================================================
       ترتيب حسب المسافة
       =================================================

       لا يتم ترتيب المطاعم وحدها أو الصيدليات وحدها.

       جميع التصنيفات تدخل في نفس القائمة:

       مطعم
       صيدلية
       حلويات
       ماركت
       مطعم
       صيدلية
       ...

       ويتم ترتيبهم كلهم حسب المسافة.
    */

    if (userLocation) {

        shops.forEach(
            shop => {

                if (
                    typeof shop.lat === "number" &&
                    typeof shop.lng === "number" &&
                    Number.isFinite(shop.lat) &&
                    Number.isFinite(shop.lng)
                ) {

                    shop.distance =
                        calculateDistance(
                            userLocation.lat,
                            userLocation.lng,
                            shop.lat,
                            shop.lng
                        );

                } else {

                    /*
                       أي محل ليس لديه إحداثيات
                       يوضع في نهاية القائمة.
                    */

                    shop.distance =
                        Infinity;
                }

            }
        );


        shops.sort(
            (a, b) => {

                const distanceA =
                    Number.isFinite(
                        a.distance
                    )
                        ? a.distance
                        : Infinity;


                const distanceB =
                    Number.isFinite(
                        b.distance
                    )
                        ? b.distance
                        : Infinity;


                if (
                    distanceA !==
                    distanceB
                ) {

                    return (
                        distanceA -
                        distanceB
                    );
                }


                /*
                   في حالة تساوي المسافة
                   نرتب بالاسم.
                */

                return String(
                    a.name || ""
                ).localeCompare(
                    String(
                        b.name || ""
                    ),
                    "ar"
                );
            }
        );
    }


    return shops;
}


/* =====================================================
   RESULTS COUNT
===================================================== */

function updateResultsCount() {

    if (!resultsCount) {
        return;
    }


    resultsCount.textContent =
        getFilteredShops().length;
}


/* =====================================================
   RENDER SHOPS
===================================================== */

function renderShops() {

    if (!shopsGrid) {
        return;
    }


    const shops =
        getFilteredShops();


    updateResultsCount();


    if (!shops.length) {

        shopsGrid.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-store-slash"></i>

                <h3>
                    مفيش أماكن مطابقة
                </h3>

                <p>
                    جرّب كلمة بحث مختلفة أو اختار تصنيف آخر.
                </p>

            </div>

        `;

        return;
    }


    shopsGrid.innerHTML =
        shops
            .map(createShopCard)
            .join("");
}


/* =====================================================
   SHOP CARD
===================================================== */

function createShopCard(shop) {

    const category =
        CATEGORY_CONFIG[
            shop.category
        ] ||
        CATEGORY_CONFIG.all;


    const distance =
        getDistanceText(shop);


    const phone =
        shop.phone
            ? normalizePhone(shop.phone)
            : "";


    const hasMenu =
        shop.menu &&
        typeof shop.menu === "object" &&
        Object.keys(shop.menu).length > 0;


    const hasLocation =
        typeof shop.lat === "number" &&
        typeof shop.lng === "number";


    return `

        <article
            class="shop-card"
            data-shop-id="${escapeHTML(shop.id)}"
        >

            <div
                class="shop-image"
                style="
                    --placeholder-color:${escapeAttribute(category.color)};
                "
            >

                <div class="shop-image-placeholder">

                    <i class="${escapeAttribute(category.icon)}"></i>

                </div>


                <span
                    class="shop-category"
                    style="
                        --category-color:${escapeAttribute(category.color)};
                    "
                >

                    ${escapeHTML(
                        shop.categoryName ||
                        category.name
                    )}

                </span>


                <span class="source-badge">
                    محلات مصر
                </span>

            </div>


            <div class="shop-info">

                <h3>
                    ${escapeHTML(shop.name)}
                </h3>


                <div class="shop-address">

                    <i class="fa-solid fa-location-dot"></i>

                    <span>

                        ${escapeHTML(
                            shop.address ||
                            "العاشر من رمضان، الشرقية"
                        )}

                    </span>

                </div>


                <div class="shop-meta">

                    <div
                        class="rating"
                        aria-label="التقييم"
                    >

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>

                    </div>


                    ${
                        distance
                            ? `

                                <span class="distance">
                                    ${escapeHTML(distance)}
                                </span>

                              `
                            : ""
                    }

                </div>


                <div class="shop-actions">

                    ${
                        phone
                            ? `

                                <a
                                    href="tel:${escapeAttribute(phone)}"
                                    aria-label="الاتصال بـ ${escapeAttribute(shop.name)}"
                                >

                                    <i class="fa-solid fa-phone"></i>

                                    اتصال

                                </a>

                              `
                            : ""
                    }


                    ${
                        hasLocation
                            ? `

                                <a
                                    href="#"
                                    onclick="openShopOnMap('${escapeAttribute(shop.id)}'); return false;"
                                >

                                    <i class="fa-solid fa-location-arrow"></i>

                                    الخريطة

                                </a>

                              `
                            : `

                                <a
                                    href="#"
                                    onclick="locateShop('${escapeAttribute(shop.id)}'); return false;"
                                >

                                    <i class="fa-solid fa-location-dot"></i>

                                    تحديد الموقع

                                </a>

                              `
                    }


                    ${
                        hasMenu
                            ? `

                                <button
                                    type="button"
                                    class="menu-button"
                                    onclick="openMenu('${escapeAttribute(shop.id)}')"
                                >

                                    <i class="fa-solid fa-utensils"></i>

                                    المنيو

                                </button>

                              `
                            : ""
                    }

                </div>

            </div>

        </article>

    `;
}


/* =====================================================
   MAP MARKERS
===================================================== */

function renderMapMarkers() {

    if (
        !map ||
        !markersLayer
    ) {
        return;
    }


    markersLayer.clearLayers();


    const shops =
        getFilteredShops();


    shops.forEach(
        shop => {

            if (
                typeof shop.lat !== "number" ||
                typeof shop.lng !== "number"
            ) {
                return;
            }


            const category =
                CATEGORY_CONFIG[
                    shop.category
                ] ||
                CATEGORY_CONFIG.all;


            const icon =
                L.divIcon({

                    className:
                        "category-map-marker-wrapper",

                    html: `

                        <div
                            class="category-map-marker"
                            style="
                                background:${escapeAttribute(category.color)};
                            "
                        >

                            <i class="${escapeAttribute(category.icon)}"></i>

                        </div>

                    `,

                    iconSize: [
                        42,
                        42
                    ],

                    iconAnchor: [
                        21,
                        42
                    ],

                    popupAnchor: [
                        0,
                        -40
                    ]
                });


            const marker =
                L.marker(
                    [
                        shop.lat,
                        shop.lng
                    ],
                    {
                        icon
                    }
                );


            marker.bindPopup(
                createPopup(shop)
            );


            marker.on(
                "click",
                function () {

                    map.setView(
                        [
                            shop.lat,
                            shop.lng
                        ],
                        16,
                        {
                            animate: true
                        }
                    );

                }
            );


            marker.addTo(
                markersLayer
            );
        }
    );


    if (userLocation) {

        renderUserLocation();
    }
}


/* =====================================================
   POPUP
===================================================== */

function createPopup(shop) {

    const category =
        CATEGORY_CONFIG[
            shop.category
        ] ||
        CATEGORY_CONFIG.all;


    const phone =
        shop.phone
            ? normalizePhone(shop.phone)
            : "";


    const hasMenu =
        shop.menu &&
        typeof shop.menu === "object" &&
        Object.keys(shop.menu).length > 0;


    return `

        <div class="custom-popup">

            <div class="popup-title">

                ${escapeHTML(shop.name)}

            </div>


            <div
                class="popup-category"
                style="
                    color:${escapeAttribute(category.color)}
                "
            >

                <i class="${escapeAttribute(category.icon)}"></i>

                ${escapeHTML(
                    shop.categoryName ||
                    category.name
                )}

            </div>


            ${
                shop.address
                    ? `

                        <div class="popup-address">

                            <i class="fa-solid fa-location-dot"></i>

                            <span>
                                ${escapeHTML(shop.address)}
                            </span>

                        </div>

                      `
                    : ""
            }


            ${
                phone
                    ? `

                        <div class="popup-phone">

                            <i class="fa-solid fa-phone"></i>

                            <span>
                                ${escapeHTML(shop.phone)}
                            </span>

                        </div>

                      `
                    : ""
            }


            <div class="popup-buttons">

                ${
                    phone
                        ? `

                            <a
                                class="popup-button"
                                href="tel:${escapeAttribute(phone)}"
                            >
                                اتصال
                            </a>

                          `
                        : ""
                }


                <button
                    type="button"
                    class="popup-button secondary"
                    onclick="openShopOnMap('${escapeAttribute(shop.id)}')"
                >
                    الموقع
                </button>

            </div>


            ${
                hasMenu
                    ? `

                        <div style="margin-top:8px;">

                            <button
                                type="button"
                                class="popup-button"
                                style="
                                    width:100%;
                                    border:0;
                                    cursor:pointer;
                                "
                                onclick="openMenu('${escapeAttribute(shop.id)}')"
                            >

                                <i class="fa-solid fa-utensils"></i>

                                عرض المنيو

                            </button>

                        </div>

                      `
                    : ""
            }

        </div>

    `;
}


/* =====================================================
   OPEN SHOP ON MAP
===================================================== */

window.openShopOnMap =
    function (shopId) {

        const shop =
            MANUAL_SHOPS.find(
                item =>
                    item.id === shopId
            );


        if (!shop) {
            return;
        }


        if (
            typeof shop.lat !== "number" ||
            typeof shop.lng !== "number"
        ) {

            locateShop(shopId);

            return;
        }


        if (!map) {

            alert(
                "الخريطة غير متاحة حاليًا."
            );

            return;
        }


        map.setView(
            [
                shop.lat,
                shop.lng
            ],
            17,
            {
                animate: true
            }
        );


        setTimeout(
            function () {

                if (!markersLayer) {
                    return;
                }


                markersLayer.eachLayer(
                    marker => {

                        if (
                            typeof marker.getLatLng !==
                                "function"
                        ) {
                            return;
                        }


                        const position =
                            marker.getLatLng();


                        if (
                            Math.abs(
                                position.lat -
                                shop.lat
                            ) < 0.000001 &&

                            Math.abs(
                                position.lng -
                                shop.lng
                            ) < 0.000001
                        ) {

                            marker.openPopup();
                        }

                    }
                );

            },
            400
        );


        scrollToExplore();
    };


/* =====================================================
   LOCATE SHOP
===================================================== */

window.locateShop =
    async function (shopId) {

        const shop =
            MANUAL_SHOPS.find(
                item =>
                    item.id === shopId
            );


        if (!shop) {
            return;
        }


        if (
            typeof shop.lat === "number" &&
            typeof shop.lng === "number"
        ) {

            openShopOnMap(shopId);

            return;
        }


        if (!shop.address) {

            alert(
                "عنوان هذا المحل غير متوفر لتحديد موقعه."
            );

            return;
        }


        showMapLoading(
            `جاري تحديد موقع ${shop.name}...`
        );


        try {

            const result =
                await geocodeShop(shop);


            if (!result) {

                hideMapLoading();

                alert(
                    "لم نتمكن من تحديد موقع هذا المحل من العنوان."
                );

                return;
            }


            shop.lat =
                result.lat;

            shop.lng =
                result.lng;

            shop.geocoded =
                true;


            /*
               مهم:
               بعد تحديد إحداثيات المحل
               نحسب المسافة مرة أخرى.
            */

            if (userLocation) {

                shop.distance =
                    calculateDistance(
                        userLocation.lat,
                        userLocation.lng,
                        shop.lat,
                        shop.lng
                    );
            }


            /*
               إعادة رسم القائمة ستؤدي إلى
               إعادة ترتيبها تلقائيًا حسب المسافة.
            */

            renderShops();

            renderMapMarkers();


            hideMapLoading();


            if (map) {

                map.setView(
                    [
                        shop.lat,
                        shop.lng
                    ],
                    17,
                    {
                        animate: true
                    }
                );

            }


            setTimeout(
                function () {

                    openShopOnMap(
                        shopId
                    );

                },
                300
            );

        } catch (error) {

            console.error(
                "Locate shop error:",
                error
            );

            hideMapLoading();

            alert(
                "حدث خطأ أثناء تحديد موقع المحل."
            );
        }
    };


/* =====================================================
   USER LOCATION
===================================================== */

function getCurrentLocation() {

    if (!navigator.geolocation) {

        alert(
            "المتصفح لا يدعم تحديد الموقع."
        );

        return;
    }


    showMapLoading(
        "جاري تحديد موقعك..."
    );


    navigator.geolocation.getCurrentPosition(

        function (position) {

            const lat =
                position.coords.latitude;

            const lng =
                position.coords.longitude;

            const accuracy =
                position.coords.accuracy;


            userLocation = {

                lat,

                lng,

                accuracy
            };


            /*
               حساب المسافات لجميع المحلات
               التي لديها إحداثيات.
            */

            calculateDistances();


            renderUserLocation();


            if (map) {

                map.setView(
                    [
                        lat,
                        lng
                    ],
                    14,
                    {
                        animate: true
                    }
                );
            }


            if (currentLocationText) {

                currentLocationText.textContent =
                    "تم تحديد موقعك الحالي";
            }


            hideMapLoading();


            /*
               renderShops()
               سيستخدم getFilteredShops()
               التي ترتب كل المحلات
               من الأقرب للأبعد.
            */

            renderShops();

            renderMapMarkers();

        },


        function (error) {

            hideMapLoading();


            let message =
                "تعذر تحديد موقعك.";


            if (
                error.code === 1
            ) {

                message =
                    "اسمح للموقع بالوصول إلى موقعك من إعدادات المتصفح.";

            }


            if (
                error.code === 2
            ) {

                message =
                    "تعذر العثور على موقعك حاليًا.";

            }


            if (
                error.code === 3
            ) {

                message =
                    "انتهت مهلة تحديد الموقع. حاول مرة أخرى.";

            }


            if (currentLocationText) {

                currentLocationText.textContent =
                    message;
            }


            alert(message);

        },


        {
            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 60000
        }
    );
}


/* =====================================================
   RENDER USER LOCATION
===================================================== */

function renderUserLocation() {

    if (
        !map ||
        !userLocation
    ) {
        return;
    }


    if (userMarker) {

        map.removeLayer(
            userMarker
        );

        userMarker = null;
    }


    if (accuracyCircle) {

        map.removeLayer(
            accuracyCircle
        );

        accuracyCircle = null;
    }


    userMarker =
        L.circleMarker(
            [
                userLocation.lat,
                userLocation.lng
            ],
            {

                radius: 9,

                fillColor: "#2563eb",

                color: "#ffffff",

                weight: 4,

                fillOpacity: 1
            }
        )
        .addTo(map);


    userMarker.bindPopup(
        `
            <div
                style="
                    direction:rtl;
                    text-align:right;
                "
            >

                <strong>
                    موقعك الحالي
                </strong>

                <br>

                <small>
                    هنا موقعك على الخريطة
                </small>

            </div>
        `
    );


    if (
        typeof userLocation.accuracy ===
        "number" &&
        Number.isFinite(
            userLocation.accuracy
        )
    ) {

        accuracyCircle =
            L.circle(
                [
                    userLocation.lat,
                    userLocation.lng
                ],
                {

                    radius:
                        userLocation.accuracy,

                    color: "#2563eb",

                    fillColor: "#2563eb",

                    fillOpacity: 0.08,

                    weight: 1
                }
            )
            .addTo(map);
    }
}


/* =====================================================
   DISTANCE
===================================================== */

function calculateDistance(
    lat1,
    lng1,
    lat2,
    lng2
) {

    const R = 6371;


    const dLat =
        toRadians(
            lat2 - lat1
        );


    const dLng =
        toRadians(
            lng2 - lng1
        );


    const a =

        Math.sin(
            dLat / 2
        ) *
        Math.sin(
            dLat / 2
        ) +

        Math.cos(
            toRadians(lat1)
        ) *

        Math.cos(
            toRadians(lat2)
        ) *

        Math.sin(
            dLng / 2
        ) *
        Math.sin(
            dLng / 2
        );


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return R * c;
}


function getDistanceText(shop) {

    if (!userLocation) {
        return "";
    }


    if (
        typeof shop.lat !== "number" ||
        typeof shop.lng !== "number"
    ) {
        return "";
    }


    const distance =
        calculateDistance(
            userLocation.lat,
            userLocation.lng,
            shop.lat,
            shop.lng
        );


    if (
        distance < 1
    ) {

        return `${Math.round(
            distance * 1000
        )} متر`;

    }


    return `${distance.toFixed(1)} كم`;
}


function calculateDistances() {

    MANUAL_SHOPS.forEach(
        shop => {

            if (
                userLocation &&
                typeof shop.lat === "number" &&
                typeof shop.lng === "number" &&
                Number.isFinite(shop.lat) &&
                Number.isFinite(shop.lng)
            ) {

                shop.distance =
                    calculateDistance(
                        userLocation.lat,
                        userLocation.lng,
                        shop.lat,
                        shop.lng
                    );

            } else {

                shop.distance =
                    Infinity;
            }

        }
    );
}


/* =====================================================
   AREA SEARCH
===================================================== */

async function searchArea() {

    if (!areaInput) {
        return;
    }


    const area =
        areaInput.value.trim();


    if (!area) {

        currentArea = "";


        if (currentLocationText) {

            currentLocationText.textContent =
                "العاشر من رمضان، الشرقية";
        }


        renderShops();

        renderMapMarkers();

        return;
    }


    currentArea =
        area;


    showMapLoading(
        "جاري البحث عن المنطقة..."
    );


    try {

        const params =
            new URLSearchParams({

                q:
                    `${area}, الشرقية، مصر`,

                format:
                    "json",

                limit:
                    "1",

                "accept-language":
                    "ar"
            });


        const response =
            await fetch(
                `${CONFIG.nominatimUrl}?${params.toString()}`,
                {

                    headers: {

                        "Accept":
                            "application/json"
                    }
                }
            );


        if (!response.ok) {

            throw new Error(
                `Geocoding failed: HTTP ${response.status}`
            );
        }


        const data =
            await response.json();


        if (
            !Array.isArray(data) ||
            !data.length
        ) {

            hideMapLoading();


            alert(
                "لم يتم العثور على المنطقة. جرّب اسم منطقة أو مدينة أخرى."
            );

            return;
        }


        const lat =
            parseFloat(
                data[0].lat
            );


        const lng =
            parseFloat(
                data[0].lon
            );


        if (
            !Number.isFinite(lat) ||
            !Number.isFinite(lng)
        ) {

            throw new Error(
                "Invalid coordinates"
            );
        }


        if (map) {

            map.setView(
                [
                    lat,
                    lng
                ],
                14,
                {
                    animate: true
                }
            );
        }


        if (currentLocationText) {

            currentLocationText.textContent =
                `المنطقة: ${area}`;
        }


        renderShops();

        renderMapMarkers();

        hideMapLoading();

    } catch (error) {

        console.error(
            "Area search error:",
            error
        );


        hideMapLoading();


        /*
           حتى لو لم نقدر نحدد المنطقة على الخريطة،
           البحث في أسماء وعناوين المحلات يظل شغال.
        */

        renderShops();

        renderMapMarkers();


        alert(
            "تم البحث في بيانات المحلات، لكن تعذر تحديد المنطقة على الخريطة."
        );
    }
}


/* =====================================================
   GEOCODING SHOPS
===================================================== */

async function startGeocoding() {

    if (geocodingInProgress) {
        return;
    }


    geocodingInProgress = true;


    const shopsWithoutCoordinates =
        MANUAL_SHOPS.filter(
            shop =>

                typeof shop.lat !==
                    "number" ||

                typeof shop.lng !==
                    "number"
        );


    if (!shopsWithoutCoordinates.length) {

        geocodingInProgress =
            false;

        hideMapLoading();

        /*
           حتى لو كل الإحداثيات موجودة،
           نعيد الحساب والترتيب.
        */

        if (userLocation) {
            calculateDistances();
        }

        renderShops();
        renderMapMarkers();

        return;
    }


    showMapLoading(
        "جاري تحديد مواقع المحلات..."
    );


    for (
        let i = 0;
        i < shopsWithoutCoordinates.length;
        i++
    ) {

        const shop =
            shopsWithoutCoordinates[i];


        try {

            updateLoadingText(
                `جاري تحديد مواقع المحلات... ${i + 1}/${shopsWithoutCoordinates.length}`
            );


            const result =
                await geocodeShop(shop);


            if (result) {

                shop.lat =
                    result.lat;

                shop.lng =
                    result.lng;

                shop.geocoded =
                    true;


                /*
                   لو المستخدم محدد موقعه،
                   نحسب مسافة المحل الجديد فورًا.
                */

                if (userLocation) {

                    shop.distance =
                        calculateDistance(
                            userLocation.lat,
                            userLocation.lng,
                            shop.lat,
                            shop.lng
                        );
                }


                /*
                   getFilteredShops()
                   سيعيد ترتيب القائمة
                   تلقائيًا بعد كل إحداثية جديدة.
                */

                renderMapMarkers();

                renderShops();
            }

        } catch (error) {

            console.warn(
                "Geocoding error:",
                shop.name,
                error
            );

        }


        /*
           Nominatim لديه سياسة استخدام
           لذلك ننتظر بين الطلبات.
        */

        await sleep(
            CONFIG.geocodeDelay
        );
    }


    geocodingInProgress =
        false;


    hideMapLoading();


    /*
       تحديث نهائي للمسافات والترتيب.
    */

    if (userLocation) {

        calculateDistances();
    }


    renderMapMarkers();

    renderShops();
}


/* =====================================================
   GEOCODE SINGLE SHOP
===================================================== */

async function geocodeShop(shop) {

    if (!shop || !shop.address) {
        return null;
    }


    const query =
        `${shop.address}, مصر`;


    const params =
        new URLSearchParams({

            q:
                query,

            format:
                "json",

            limit:
                "1",

            "accept-language":
                "ar"
        });


    const response =
        await fetch(
            `${CONFIG.nominatimUrl}?${params.toString()}`,
            {

                headers: {

                    "Accept":
                        "application/json"
                }
            }
        );


    if (!response.ok) {

        throw new Error(
            `HTTP ${response.status}`
        );
    }


    const data =
        await response.json();


    if (
        !Array.isArray(data) ||
        !data.length
    ) {
        return null;
    }


    const lat =
        parseFloat(
            data[0].lat
        );


    const lng =
        parseFloat(
            data[0].lon
        );


    if (
        !Number.isFinite(lat) ||
        !Number.isFinite(lng)
    ) {
        return null;
    }


    return {
        lat,
        lng
    };
}


/* =====================================================
   LEGEND
===================================================== */

function renderLegend() {

    const legendGrid =
        document.getElementById(
            "legendGrid"
        );


    if (!legendGrid) {
        return;
    }


    const categories =
        Object.entries(
            CATEGORY_CONFIG
        )
        .filter(
            ([key]) =>
                key !== "all"
        );


    legendGrid.innerHTML =
        categories
            .map(
                ([key, category]) => `

                    <button
                        type="button"
                        class="legend-item"
                        data-category="${escapeAttribute(key)}"
                        onclick="selectCategory('${escapeAttribute(key)}')"
                    >

                        <span
                            class="legend-dot"
                            style="
                                background:${escapeAttribute(category.color)};
                            "
                        ></span>


                        <i
                            class="${escapeAttribute(category.icon)}"
                            style="
                                color:${escapeAttribute(category.color)};
                            "
                        ></i>


                        <span>
                            ${escapeHTML(category.name)}
                        </span>

                    </button>

                `
            )
            .join("");
}


/* =====================================================
   MENU MODAL
===================================================== */

window.openMenu =
    function (shopId) {

        const shop =
            MANUAL_SHOPS.find(
                item =>
                    item.id === shopId
            );


        if (!shop) {
            return;
        }


        if (
            !shop.menu ||
            typeof shop.menu !== "object" ||
            !Object.keys(shop.menu).length
        ) {

            alert(
                "المنيو الخاصة بهذا المحل غير مضافة حاليًا."
            );

            return;
        }


        removeExistingMenuModal();


        const modal =
            document.createElement(
                "div"
            );


        modal.className =
            "menu-modal active";


        modal.id =
            "menuModal";


        modal.innerHTML = `

            <div
                class="menu-modal-backdrop"
                onclick="closeMenuModal()"
            ></div>


            <div
                class="menu-modal-card"
                role="dialog"
                aria-modal="true"
                aria-label="منيو ${escapeAttribute(shop.name)}"
            >

                <button
                    type="button"
                    class="menu-modal-close"
                    onclick="closeMenuModal()"
                    aria-label="إغلاق"
                >

                    <i class="fa-solid fa-xmark"></i>

                </button>


                <div class="menu-modal-head">

                    <span class="small-label">
                        قائمة الطعام
                    </span>


                    <h3>
                        ${escapeHTML(shop.name)}
                    </h3>


                    ${
                        shop.address
                            ? `

                                <p
                                    style="
                                        color:#64748b;
                                        margin-top:6px;
                                        font-size:13px;
                                    "
                                >

                                    <i
                                        class="fa-solid fa-location-dot"
                                    ></i>

                                    ${escapeHTML(shop.address)}

                                </p>

                              `
                            : ""
                    }

                </div>


                <div class="menu-content">

                    ${renderMenuContent(shop)}

                </div>

            </div>

        `;


        document.body.appendChild(
            modal
        );


        document.body.classList.add(
            "menu-open"
        );
    };


/* =====================================================
   RENDER MENU
===================================================== */

function renderMenuContent(shop) {

    if (
        !shop ||
        !shop.menu ||
        typeof shop.menu !== "object"
    ) {
        return "";
    }


    const categories =
        Object.entries(
            shop.menu
        );


    return categories
        .map(
            ([categoryName, items]) => `

                <section class="menu-category">

                    <h4>
                        ${escapeHTML(categoryName)}
                    </h4>


                    <div class="menu-items">

                        ${
                            Array.isArray(items)
                                ? items
                                    .map(
                                        item => `

                                            <div class="menu-item">

                                                <div>

                                                    <strong>
                                                        ${escapeHTML(
                                                            item.name || ""
                                                        )}
                                                    </strong>


                                                    ${
                                                        item.description
                                                            ? `

                                                                <p>
                                                                    ${escapeHTML(
                                                                        item.description
                                                                    )}
                                                                </p>

                                                              `
                                                            : ""
                                                    }

                                                </div>


                                                ${
                                                    item.price
                                                        ? `

                                                            <span>
                                                                ${escapeHTML(
                                                                    item.price
                                                                )}
                                                            </span>

                                                          `
                                                        : ""
                                                }

                                            </div>

                                        `
                                    )
                                    .join("")
                                : ""
                        }

                    </div>

                </section>

            `
        )
        .join("") +

        (
            shop.menuUrl
                ? `

                    <a
                        class="menu-external-link"
                        href="${escapeAttribute(shop.menuUrl)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <i
                            class="fa-solid fa-arrow-up-right-from-square"
                        ></i>

                        فتح المنيو على طلبات

                    </a>


                    <p class="menu-note">

                        الأسعار والمنتجات المعروضة
                        يمكن أن تتغير من وقت لآخر.

                    </p>

                  `
                : ""
        );
}


/* =====================================================
   CLOSE MENU
===================================================== */

window.closeMenuModal =
    function () {

        const modal =
            document.getElementById(
                "menuModal"
            );


        if (modal) {

            modal.remove();
        }


        document.body.classList.remove(
            "menu-open"
        );
    };


function removeExistingMenuModal() {

    const existing =
        document.getElementById(
            "menuModal"
        );


    if (existing) {

        existing.remove();
    }
}


/* =====================================================
   MOBILE MENU
===================================================== */

function openMobileMenu() {

    if (!mobileMenu) {
        return;
    }


    mobileMenu.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";
}


function closeMobileMenu() {

    if (!mobileMenu) {
        return;
    }


    mobileMenu.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";
}


/* =====================================================
   HELPERS
===================================================== */

function normalizePhone(phone) {

    if (!phone) {
        return "";
    }


    let value =
        String(phone)
            .trim()
            .replace(/\s+/g, "");


    /*
       أرقام مصر المحلية:
       010...
       011...
       012...
       015...
    */

    if (
        /^01\d{9}$/.test(value)
    ) {

        return `+20${value.substring(1)}`;
    }


    /*
       أرقام أرضية مثل:
       055...
    */

    if (
        /^0\d{9,10}$/.test(value)
    ) {

        return value;
    }


    /*
       أرقام مختصرة مثل:
       15761
       19019
    */

    return value;
}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}


function escapeAttribute(value) {

    return escapeHTML(value)
        .replace(
            /`/g,
            "&#096;"
        );
}


/* =====================================================
   DEBOUNCE
===================================================== */

function debounce(
    callback,
    delay
) {

    let timeout;


    return function (...args) {

        clearTimeout(timeout);


        timeout =
            setTimeout(
                () =>
                    callback.apply(
                        this,
                        args
                    ),
                delay
            );
    };
}


/* =====================================================
   SLEEP
===================================================== */

function sleep(ms) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );
}


/* =====================================================
   RADIANS
===================================================== */

function toRadians(degrees) {

    return (
        degrees *
        Math.PI /
        180
    );
}


/* =====================================================
   SCROLL
===================================================== */

function scrollToExplore() {

    const section =
        document.getElementById(
            "explore"
        );


    if (!section) {
        return;
    }


    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================================
   LOADING
===================================================== */

function showMapLoading(text) {

    if (!mapLoading) {
        return;
    }


    mapLoading.classList.remove(
        "hidden"
    );


    if (loadingText) {

        loadingText.textContent =
            text ||
            "جاري التحميل...";
    }
}


function hideMapLoading() {

    if (!mapLoading) {
        return;
    }


    mapLoading.classList.add(
        "hidden"
    );
}


function updateLoadingText(text) {

    if (loadingText) {

        loadingText.textContent =
            text;
    }
}


/* =====================================================
   SAFETY / DATA VALIDATION
===================================================== */

function validateShopData() {

    const ids =
        new Set();


    MANUAL_SHOPS.forEach(
        shop => {

            if (!shop.id) {

                console.warn(
                    "Shop without ID:",
                    shop
                );

                return;
            }


            if (ids.has(shop.id)) {

                console.warn(
                    "Duplicate shop ID:",
                    shop.id
                );

            }


            ids.add(shop.id);


            if (
                shop.category &&
                !CATEGORY_CONFIG[shop.category]
            ) {

                console.warn(
                    "Unknown shop category:",
                    shop.name,
                    shop.category
                );

            }


            if (
                shop.lat !== undefined &&
                (
                    typeof shop.lat !== "number" ||
                    !Number.isFinite(shop.lat)
                )
            ) {

                delete shop.lat;
            }


            if (
                shop.lng !== undefined &&
                (
                    typeof shop.lng !== "number" ||
                    !Number.isFinite(shop.lng)
                )
            ) {

                delete shop.lng;
            }

        }
    );
}


validateShopData();
