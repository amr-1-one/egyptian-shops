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
   =====================================================

   مهم:
   هذا هو نفس MANUAL_SHOPS الموجود عندك.
   اترك بيانات المحلات التي أضفتها يدويًا هنا.
   
   لو عندك بالفعل MANUAL_SHOPS في ملفك،
   استبدل هذا الجزء بالبيانات الموجودة عندك.
===================================================== */

const MANUAL_SHOPS = [

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
       RESTAURANTS
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
   APIS
===================================================== */

const OVERPASS_API =
    "https://overpass-api.de/api/interpreter";

const SEARCH_RADIUS = 5000;

const GOOGLE_MAPS_API_KEY = "";


/* =====================================================
   VARIABLES
===================================================== */

let map;
let userMarker = null;
let markers = [];

let allShops = [];

let currentCategory = "all";

let currentLocation = null;

let googlePlacesService = null;

let googleLoaded = false;


/* =====================================================
   CATEGORY NAMES
===================================================== */

const categoryNames = {

    restaurant: "مطاعم",

    sweets: "حلويات",

    market: "سوبر ماركت",

    shopping: "ملابس",

    cafe: "كافيهات",

    pharmacy: "صيدليات",

    bakery: "مخابز",

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

    supermarket: "سوبر ماركت",

    convenience: "متجر",

    department_store: "متجر كبير",

    hairdresser: "حلاق / كوافير",

    other: "مكان"
};


/* =====================================================
   CATEGORY COLORS
===================================================== */

const categoryColors = {

    restaurant: "#ef4444",

    sweets: "#ec4899",

    market: "#2563eb",

    shopping: "#8b5cf6",

    cafe: "#a16207",

    pharmacy: "#16a34a",

    bakery: "#f97316",

    butcher: "#dc2626",

    greengrocer: "#22c55e",

    electronics: "#0891b2",

    mobile_phone: "#06b6d4",

    shoes: "#7c3aed",

    jewelry: "#ca8a04",

    furniture: "#92400e",

    cosmetics: "#db2777",

    books: "#475569",

    sports: "#059669",

    department_store: "#4338ca",

    hairdresser: "#be185d",

    other: "#64748b"
};


/* =====================================================
   CATEGORY ICONS
===================================================== */

const categoryIcons = {

    restaurant: "fa-utensils",

    sweets: "fa-cake-candles",

    market: "fa-cart-shopping",

    shopping: "fa-shirt",

    cafe: "fa-mug-hot",

    pharmacy: "fa-prescription-bottle-medical",

    bakery: "fa-bread-slice",

    butcher: "fa-drumstick-bite",

    greengrocer: "fa-apple-whole",

    electronics: "fa-tv",

    mobile_phone: "fa-mobile-screen-button",

    shoes: "fa-shoe-prints",

    jewelry: "fa-gem",

    furniture: "fa-couch",

    cosmetics: "fa-wand-magic-sparkles",

    books: "fa-book",

    sports: "fa-futbol",

    department_store: "fa-building",

    hairdresser: "fa-scissors",

    other: "fa-store"
};


/* =====================================================
   INITIALIZE MAP
===================================================== */

function initializeMap() {

    map = L.map("map").setView(
        [
            CONFIG.defaultLocation.lat,
            CONFIG.defaultLocation.lng
        ],
        CONFIG.defaultLocation.zoom
    );

    L.tileLayer(
        CONFIG.mapTileUrl,
        {
            maxZoom: 19,
            attribution: CONFIG.mapAttribution
        }
    ).addTo(map);

    renderLegend();

    /*
       مهم جدًا:
       هنا نضيف المحلات اليدوية فورًا.
    */

    allShops = cloneManualShops();

    filterShops();

    /*
       نحاول تحديد إحداثيات المحلات التي ليس لديها lat/lng
       ثم نعيد رسمها.
    */

    prepareManualShops().then(() => {

        filterShops();

    });

    if (GOOGLE_MAPS_API_KEY.trim()) {
        loadGooglePlaces();
    }
}


/* =====================================================
   CLONE MANUAL SHOPS
===================================================== */

function cloneManualShops() {

    return MANUAL_SHOPS.map(shop => ({
        ...shop,
        source: "manual",

        categoryName:
            shop.categoryName ||
            categoryNames[shop.category] ||
            "مكان",

        lat:
            Number.isFinite(Number(shop.lat))
                ? Number(shop.lat)
                : null,

        lng:
            Number.isFinite(Number(shop.lng))
                ? Number(shop.lng)
                : null,

        phone:
            shop.phone || "",

        website:
            shop.website || "",

        image:
            shop.image || null,

        rating:
            shop.rating || null,

        ratingCount:
            shop.ratingCount || null,

        googlePlaceId:
            null
    }));
}


/* =====================================================
   PREPARE MANUAL SHOPS
===================================================== */

async function prepareManualShops() {

    const shopsWithoutLocation =
        allShops.filter(shop =>
            shop.source === "manual" &&
            (
                shop.lat === null ||
                shop.lng === null
            ) &&
            shop.address
        );

    if (!shopsWithoutLocation.length) {
        return;
    }

    showLoading(
        "جاري تحديد مواقع المحلات المضافة يدويًا..."
    );

    for (const shop of shopsWithoutLocation) {

        try {

            const location =
                await geocodeManualShop(shop);

            if (location) {

                shop.lat = location.lat;
                shop.lng = location.lng;

            }

        } catch (error) {

            console.warn(
                "تعذر تحديد موقع:",
                shop.name,
                error
            );

        }

        await sleep(CONFIG.geocodeDelay);
    }

    hideLoading();
}


/* =====================================================
   GEOCODE MANUAL SHOP
===================================================== */

async function geocodeManualShop(shop) {

    const queries = [

        `${shop.name}, ${shop.address}`,

        `${shop.address}, العاشر من رمضان، الشرقية`,

        `${shop.name}, العاشر من رمضان، الشرقية`
    ];

    for (const query of queries) {

        try {

            const url =
                CONFIG.nominatimUrl +
                "?format=json" +
                "&limit=1" +
                "&countrycodes=eg" +
                "&accept-language=ar" +
                "&q=" +
                encodeURIComponent(query);

            const response =
                await fetch(url);

            if (!response.ok) {
                continue;
            }

            const data =
                await response.json();

            if (data && data.length) {

                return {
                    lat: parseFloat(data[0].lat),
                    lng: parseFloat(data[0].lon)
                };
            }

        } catch (error) {

            console.warn(
                "Geocode error:",
                query,
                error
            );
        }
    }

    return null;
}


/* =====================================================
   GOOGLE PLACES LOADER
===================================================== */

function loadGooglePlaces() {

    if (
        window.google &&
        window.google.maps &&
        window.google.maps.places
    ) {

        googleLoaded = true;
        return;
    }

    const script =
        document.createElement("script");

    script.src =
        `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
            GOOGLE_MAPS_API_KEY
        )}&libraries=places&language=ar&region=EG`;

    script.async = true;
    script.defer = true;

    script.onload = () => {

        googleLoaded = true;

        console.log(
            "Google Places جاهز."
        );
    };

    script.onerror = () => {

        console.warn(
            "تعذر تحميل Google Places. سيتم استخدام OpenStreetMap."
        );
    };

    document.head.appendChild(script);
}


/* =====================================================
   LOADING
===================================================== */

function showLoading(
    text = "جاري تحميل الأماكن..."
) {

    const loading =
        document.getElementById("mapLoading");

    const textElement =
        document.getElementById("loadingText");

    if (!loading || !textElement) {
        return;
    }

    textElement.textContent = text;

    loading.classList.remove("hidden");
}


function hideLoading() {

    const loading =
        document.getElementById("mapLoading");

    if (loading) {
        loading.classList.add("hidden");
    }
}


/* =====================================================
   LEGEND
===================================================== */

function renderLegend() {

    const grid =
        document.getElementById("legendGrid");

    if (!grid) {
        return;
    }

    const categories = [

        "restaurant",
        "sweets",
        "market",
        "shopping",
        "cafe",
        "pharmacy",
        "bakery",
        "electronics",
        "mobile_phone",
        "shoes",
        "jewelry",
        "other"
    ];

    grid.innerHTML =
        categories.map(category => `

            <button
                class="legend-item"
                type="button"
                data-category="${category}"
            >

                <span
                    class="legend-dot"
                    style="background:${categoryColors[category]}"
                ></span>

                <span>
                    ${escapeHTML(
                        categoryNames[category]
                    )}
                </span>

            </button>

        `).join("");

    grid
        .querySelectorAll(".legend-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentCategory =
                        button.dataset.category;

                    updateActiveCategory();

                    filterShops();

                    document
                        .getElementById("explore")
                        .scrollIntoView({
                            behavior: "smooth"
                        });
                }
            );
        });
}


/* =====================================================
   CLEAR MARKERS
===================================================== */

function clearMarkers() {

    markers.forEach(marker => {

        if (map.hasLayer(marker)) {
            map.removeLayer(marker);
        }

    });

    markers = [];
}


/* =====================================================
   CATEGORY HELPERS
===================================================== */

function getCategoryColor(category) {

    return (
        categoryColors[category] ||
        categoryColors.other
    );
}


function getCategoryIcon(category) {

    return (
        categoryIcons[category] ||
        categoryIcons.other
    );
}


function createCategoryIcon(category) {

    const color =
        getCategoryColor(category);

    const icon =
        getCategoryIcon(category);

    return L.divIcon({

        className:
            "category-map-marker-wrapper",

        html: `

            <div
                class="category-map-marker"
                style="
                    background:${color};
                    border-color:#ffffff;
                    box-shadow:0 4px 12px ${color}66;
                "
                title="${escapeAttribute(
                    categoryNames[category] || "مكان"
                )}"
            >

                <i class="fa-solid ${icon}"></i>

            </div>

        `,

        iconSize: [42, 42],

        iconAnchor: [21, 42],

        popupAnchor: [0, -40]
    });
}


/* =====================================================
   ADD MAP MARKER
===================================================== */

function addShopMarker(shop) {

    /*
       مهم:
       لا نحاول إضافة Marker لمحل ليس لديه إحداثيات.
    */

    if (
        !Number.isFinite(Number(shop.lat)) ||
        !Number.isFinite(Number(shop.lng))
    ) {
        return;
    }

    const marker =
        L.marker(
            [
                Number(shop.lat),
                Number(shop.lng)
            ],
            {
                icon:
                    createCategoryIcon(
                        shop.category
                    )
            }
        ).addTo(map);

    let phoneHTML = "";

    if (shop.phone) {

        phoneHTML = `

            <a
                href="tel:${escapeAttribute(shop.phone)}"
                class="popup-button"
            >

                <i class="fa-solid fa-phone"></i>

                اتصال

            </a>
        `;
    }

    const directionsURL =
        `https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}`;

    const photoHTML =
        shop.image
            ? `

                <img
                    class="popup-image"
                    src="${escapeAttribute(shop.image)}"
                    alt="${escapeAttribute(shop.name)}"
                    loading="lazy"
                    referrerpolicy="no-referrer"
                >

            `
            : "";

    const popupHTML = `

        <div class="custom-popup">

            ${photoHTML}

            <div class="popup-title">
                ${escapeHTML(shop.name)}
            </div>

            <div
                class="popup-category"
                style="color:${getCategoryColor(shop.category)}"
            >

                <i class="fa-solid ${getCategoryIcon(shop.category)}"></i>

                ${escapeHTML(
                    shop.categoryName ||
                    categoryNames[shop.category] ||
                    "مكان"
                )}

            </div>

            ${
                shop.rating
                    ? `

                        <div class="popup-rating">

                            <i class="fa-solid fa-star"></i>

                            ${escapeHTML(
                                String(shop.rating)
                            )}

                            ${
                                shop.ratingCount
                                    ? ` (${escapeHTML(
                                        String(shop.ratingCount)
                                    )})`
                                    : ""
                            }

                        </div>

                    `
                    : ""
            }

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
   OPENSTREETMAP / OVERPASS
===================================================== */

async function fetchNearbyPlaces(
    lat,
    lng
) {

    const query = `

        [out:json][timeout:45];

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

            nwr(
                around:${SEARCH_RADIUS},
                ${lat},
                ${lng}
            )["amenity"="fast_food"];

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
            "Overpass API error"
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

        const tags =
            element.tags || {};

        let lat =
            element.lat;

        let lng =
            element.lon;

        if (
            lat === undefined &&
            element.center
        ) {

            lat =
                element.center.lat;

            lng =
                element.center.lon;
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
            "";

        if (!name.trim()) {
            return;
        }

        let category =
            "other";

        if (tags.shop) {

            category =
                normalizeShopCategory(
                    tags.shop
                );
        }

        if (
            tags.amenity === "restaurant" ||
            tags.amenity === "fast_food"
        ) {

            category =
                inferFoodCategory(tags);
        }

        if (
            tags.amenity === "cafe"
        ) {

            category = "cafe";
        }

        if (
            tags.amenity === "pharmacy"
        ) {

            category = "pharmacy";
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

            source: "osm",

            name,

            category,

            categoryName:
                categoryNames[category] ||
                "مكان",

            lat:
                Number(lat),

            lng:
                Number(lng),

            phone,

            website,

            address,

            openingHours:
                tags.opening_hours ||
                "",

            image:
                tags.image ||
                null,

            rating: null,

            ratingCount: null,

            googlePlaceId: null
        });
    });

    return removeDuplicates(result);
}


/* =====================================================
   FOOD CATEGORY
===================================================== */

function inferFoodCategory(tags) {

    const text = [

        tags.name,

        tags["name:ar"],

        tags.cuisine

    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

    const sweetsWords = [

        "حلويات",
        "حلو",
        "sweet",
        "dessert",
        "confection",
        "laban",
        "لبن",
        "بلبن"
    ];

    if (
        sweetsWords.some(
            word => text.includes(word)
        )
    ) {

        return "sweets";
    }

    return "restaurant";
}


/* =====================================================
   NORMALIZE SHOP CATEGORIES
===================================================== */

function normalizeShopCategory(
    shopType
) {

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

    return parts.length
        ? parts.join(" - ")
        : "";
}


/* =====================================================
   GOOGLE PLACES
===================================================== */

async function fetchGooglePlaces(
    lat,
    lng
) {

    if (!GOOGLE_MAPS_API_KEY.trim()) {
        return [];
    }

    if (
        !googleLoaded ||
        !window.google ||
        !google.maps ||
        !google.maps.places
    ) {

        await waitForGooglePlaces();
    }

    if (!googleLoaded) {
        return [];
    }

    if (!googlePlacesService) {

        googlePlacesService =
            new google.maps.places.PlacesService(
                document.createElement("div")
            );
    }

    const searches = [

        {
            type: "restaurant",
            keyword: ""
        },

        {
            type: "cafe",
            keyword: ""
        },

        {
            type: "supermarket",
            keyword: ""
        },

        {
            type: "pharmacy",
            keyword: ""
        },

        {
            type: "bakery",
            keyword: ""
        },

        {
            type: "clothing_store",
            keyword: ""
        },

        {
            type: "shopping_mall",
            keyword: ""
        },

        {
            type: "jewelry_store",
            keyword: ""
        },

        {
            type: "electronics_store",
            keyword: ""
        },

        {
            type: "shoe_store",
            keyword: ""
        },

        {
            type: "restaurant",
            keyword: "بلبن"
        },

        {
            type: "restaurant",
            keyword: "B Laban"
        },

        {
            type: "restaurant",
            keyword: "بلبن حلويات"
        }
    ];

    const results = [];

    for (
        const search of searches
    ) {

        const items =
            await googleNearbySearch(
                lat,
                lng,
                search.type,
                search.keyword
            );

        results.push(...items);

        await sleep(120);
    }

    return removeDuplicates(results);
}


function waitForGooglePlaces() {

    return new Promise(
        resolve => {

            const started =
                Date.now();

            const timer =
                setInterval(() => {

                    if (
                        window.google &&
                        google.maps &&
                        google.maps.places
                    ) {

                        googleLoaded = true;

                        clearInterval(timer);

                        resolve();

                        return;
                    }

                    if (
                        Date.now() -
                        started >
                        10000
                    ) {

                        clearInterval(timer);

                        resolve();
                    }

                }, 100);
        }
    );
}


function googleNearbySearch(
    lat,
    lng,
    type,
    keyword = ""
) {

    return new Promise(
        resolve => {

            if (!googlePlacesService) {

                resolve([]);

                return;
            }

            const request = {

                location:
                    new google.maps.LatLng(
                        lat,
                        lng
                    ),

                radius:
                    SEARCH_RADIUS,

                type
            };

            if (keyword) {
                request.keyword =
                    keyword;
            }

            googlePlacesService.nearbySearch(
                request,

                (places, status) => {

                    if (
                        status !==
                            google.maps.places.PlacesServiceStatus.OK &&
                        status !==
                            google.maps.places.PlacesServiceStatus.ZERO_RESULTS
                    ) {

                        console.warn(
                            "Google Places status:",
                            status
                        );

                        resolve([]);

                        return;
                    }

                    const converted =
                        (places || [])
                            .map(
                                place =>
                                    convertGooglePlace(
                                        place
                                    )
                            )
                            .filter(Boolean);

                    resolve(converted);
                }
            );
        }
    );
}


function convertGooglePlace(place) {

    if (
        !place ||
        !place.geometry ||
        !place.geometry.location
    ) {
        return null;
    }

    const lat =
        place.geometry.location.lat();

    const lng =
        place.geometry.location.lng();

    const name =
        place.name || "";

    if (!name.trim()) {
        return null;
    }

    const category =
        normalizeGoogleCategory(
            place
        );

    let image = null;

    if (
        place.photos &&
        place.photos.length
    ) {

        try {

            image =
                place.photos[0].getUrl({
                    maxWidth: 700,
                    maxHeight: 500
                });

        } catch (error) {

            console.warn(
                "Photo URL error:",
                error
            );
        }
    }

    return {

        id:
            `google-${place.place_id || `${name}-${lat}-${lng}`}`,

        source: "google",

        name,

        category,

        categoryName:
            categoryNames[category] ||
            "مكان",

        lat,

        lng,

        phone:
            place.formatted_phone_number ||
            place.international_phone_number ||
            "",

        website:
            place.website ||
            "",

        address:
            place.vicinity ||
            place.formatted_address ||
            "",

        openingHours:
            place.opening_hours &&
            place.opening_hours.weekday_text
                ? place.opening_hours.weekday_text.join(
                    " | "
                )
                : "",

        image,

        rating:
            place.rating ||
            null,

        ratingCount:
            place.user_ratings_total ||
            null,

        googlePlaceId:
            place.place_id ||
            null
    };
}


function normalizeGoogleCategory(place) {

    const types =
        place.types || [];

    const text =
        `${place.name || ""} ${types.join(" ")}`
            .toLowerCase();

    if (

        text.includes("بلبن") ||

        text.includes("laban") ||

        text.includes("dessert") ||

        text.includes("bakery") ||

        text.includes("candy") ||

        text.includes("confection")

    ) {

        return "sweets";
    }

    if (
        types.includes("pharmacy")
    ) {
        return "pharmacy";
    }

    if (
        types.includes("cafe")
    ) {
        return "cafe";
    }

    if (
        types.includes("supermarket") ||
        types.includes("grocery_or_supermarket")
    ) {
        return "market";
    }

    if (
        types.includes("clothing_store") ||
        types.includes("shopping_mall")
    ) {
        return "shopping";
    }

    if (
        types.includes("bakery")
    ) {
        return "bakery";
    }

    if (
        types.includes("electronics_store")
    ) {
        return "electronics";
    }

    if (
        types.includes("shoe_store")
    ) {
        return "shoes";
    }

    if (
        types.includes("jewelry_store")
    ) {
        return "jewelry";
    }

    if (

        types.includes("restaurant") ||

        types.includes("meal_delivery") ||

        types.includes("meal_takeaway") ||

        types.includes("food")

    ) {

        return "restaurant";
    }

    return "other";
}


/* =====================================================
   MERGE SOURCES
===================================================== */

function mergePlaces(
    osmPlaces,
    googlePlaces
) {

    const merged = [];

    const keys =
        new Set();

    /*
       1 - المحلات اليدوية أولًا
       2 - Google
       3 - OSM

       بهذه الطريقة المحل الذي أضفته بنفسك
       لا يتم استبداله ببيانات OSM.
    */

    const manualPlaces =
        cloneManualShops();

    manualPlaces.forEach(place => {

        const key =
            createPlaceKey(place);

        if (!keys.has(key)) {

            keys.add(key);

            merged.push(place);
        }
    });


    googlePlaces.forEach(place => {

        const key =
            createPlaceKey(place);

        if (!keys.has(key)) {

            keys.add(key);

            merged.push(place);
        }
    });


    osmPlaces.forEach(place => {

        const key =
            createPlaceKey(place);

        if (!keys.has(key)) {

            keys.add(key);

            merged.push(place);
        }
    });


    return merged;
}


/* =====================================================
   REMOVE DUPLICATES
===================================================== */

function removeDuplicates(
    places
) {

    const seen =
        new Set();

    return places.filter(
        place => {

            const key =
                createPlaceKey(place);

            if (seen.has(key)) {
                return false;
            }

            seen.add(key);

            return true;
        }
    );
}


/* =====================================================
   PLACE KEY
===================================================== */

function createPlaceKey(place) {

    const normalizedName =
        String(place.name || "")
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");

    /*
       للمحلات اليدوية التي لا يوجد لها
       إحداثيات بعد، نعتمد على الاسم.
    */

    if (
        !Number.isFinite(
            Number(place.lat)
        ) ||
        !Number.isFinite(
            Number(place.lng)
        )
    ) {

        return `name-${normalizedName}`;
    }

    return `${normalizedName}-${Number(place.lat).toFixed(4)}-${Number(place.lng).toFixed(4)}`;
}


/* =====================================================
   RENDER SHOPS
===================================================== */

function renderShops(
    shopList
) {

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

    if (
        shopList.length === 0
    ) {

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


    /*
       عرض أول 30.
    */

    shopList
        .slice(0, 30)
        .forEach(shop => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "shop-card";


            const phoneButton =
                shop.phone
                    ? `

                        <a
                            href="tel:${escapeAttribute(
                                shop.phone
                            )}"
                        >

                            <i class="fa-solid fa-phone"></i>

                            اتصال

                        </a>

                    `
                    : "";


            /*
               الاتجاهات تظهر فقط
               إذا كان لدينا موقع.
            */

            const directions =
                (
                    Number.isFinite(
                        Number(shop.lat)
                    ) &&
                    Number.isFinite(
                        Number(shop.lng)
                    )
                )
                    ? `

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}"
                            target="_blank"
                            rel="noopener"
                        >

                            <i class="fa-solid fa-route"></i>

                            الاتجاهات

                        </a>

                    `
                    : "";


            const photoHTML =
                shop.image
                    ? `

                        <img
                            src="${escapeAttribute(
                                shop.image
                            )}"
                            alt="${escapeAttribute(
                                shop.name
                            )}"
                            loading="lazy"
                            referrerpolicy="no-referrer"
                        >

                    `
                    : `

                        <div
                            class="shop-image-placeholder"
                            style="--placeholder-color:${getCategoryColor(
                                shop.category
                            )}"
                        >

                            <i class="fa-solid ${getCategoryIcon(
                                shop.category
                            )}"></i>

                        </div>

                    `;


            const ratingHTML =
                shop.rating
                    ? `

                        <span class="rating">

                            <i class="fa-solid fa-star"></i>

                            ${escapeHTML(
                                String(
                                    shop.rating
                                )
                            )}

                            ${
                                shop.ratingCount
                                    ? `<small>(
                                        ${escapeHTML(
                                            String(
                                                shop.ratingCount
                                            )
                                        )}
                                    )</small>`
                                    : ""
                            }

                        </span>

                    `
                    : `

                        <span
                            class="rating category-rating"
                            style="color:${getCategoryColor(
                                shop.category
                            )}"
                        >

                            <i class="fa-solid ${getCategoryIcon(
                                shop.category
                            )}"></i>

                            ${escapeHTML(
                                shop.categoryName ||
                                categoryNames[
                                    shop.category
                                ] ||
                                "مكان"
                            )}

                        </span>

                    `;


            let sourceBadge = "";

            if (
                shop.source ===
                "google"
            ) {

                sourceBadge =
                    `<span class="source-badge">
                        Google Maps
                    </span>`;

            } else if (
                shop.source ===
                "osm"
            ) {

                sourceBadge =
                    `<span class="source-badge osm">
                        OpenStreetMap
                    </span>`;

            } else {

                sourceBadge =
                    `<span class="source-badge manual">
                        مضاف يدويًا
                    </span>`;
            }


            card.innerHTML = `

                <div class="shop-image">

                    ${photoHTML}


                    <span
                        class="shop-category"
                        style="--category-color:${getCategoryColor(
                            shop.category
                        )}"
                    >

                        <i class="fa-solid ${getCategoryIcon(
                            shop.category
                        )}"></i>

                        ${escapeHTML(
                            shop.categoryName ||
                            categoryNames[
                                shop.category
                            ] ||
                            "مكان"
                        )}

                    </span>


                    ${sourceBadge}

                </div>


                <div class="shop-info">

                    <h3>
                        ${escapeHTML(
                            shop.name
                        )}
                    </h3>


                    ${
                        shop.address
                            ? `

                                <div class="shop-address">

                                    <i class="fa-solid fa-location-dot"></i>

                                    <span>
                                        ${escapeHTML(
                                            shop.address
                                        )}
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
                                        ${escapeHTML(
                                            shop.phone
                                        )}
                                    </span>

                                </div>

                            `
                            : ""
                    }


                    <div class="shop-meta">

                        ${ratingHTML}

                        <span class="distance">
                            ${calculateDistanceText(
                                shop
                            )}
                        </span>

                    </div>


                    <div class="shop-actions">

                        ${phoneButton}

                        ${directions}

                    </div>

                </div>

            `;

            grid.appendChild(card);
        });
}


/* =====================================================
   DISTANCE
===================================================== */

function calculateDistanceText(
    shop
) {

    if (
        !currentLocation ||
        !Number.isFinite(
            Number(shop.lat)
        ) ||
        !Number.isFinite(
            Number(shop.lng)
        )
    ) {

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

        return `${Math.round(
            distance * 1000
        )} متر`;
    }

    return `${distance.toFixed(
        1
    )} كم`;
}


function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R = 6371;

    const dLat =
        toRadians(
            lat2 - lat1
        );

    const dLon =
        toRadians(
            lon2 - lon1
        );

    const a =

        Math.sin(
            dLat / 2
        ) ** 2 +

        Math.cos(
            toRadians(lat1)
        ) *

        Math.cos(
            toRadians(lat2)
        ) *

        Math.sin(
            dLon / 2
        ) ** 2;

    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}


function toRadians(
    degrees
) {

    return degrees *
        Math.PI /
        180;
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
            ? input.value
                .trim()
                .toLowerCase()
            : "";


    const filtered =
        allShops.filter(shop => {

            const matchesCategory =

                currentCategory ===
                "all" ||

                shop.category ===
                currentCategory;


            const text =

                `${shop.name || ""} ${
                    shop.categoryName || ""
                } ${
                    shop.address || ""
                }`.toLowerCase();


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
   LOAD CURRENT LOCATION
===================================================== */

async function loadUserLocation() {

    if (!navigator.geolocation) {

        alert(
            "المتصفح لا يدعم تحديد الموقع."
        );

        return;
    }


    const button =
        document.getElementById(
            "locationBtn"
        );

    button.disabled = true;

    button.innerHTML = `

        <i class="fa-solid fa-spinner fa-spin"></i>

        جاري تحديد الموقع...

    `;

    showLoading(
        "جاري تحديد موقعك وتحميل الأماكن..."
    );


    navigator.geolocation.getCurrentPosition(

        async position => {

            const lat =
                position.coords.latitude;

            const lng =
                position.coords.longitude;


            currentLocation = {
                lat,
                lng
            };


            map.setView(
                [lat, lng],
                15
            );


            if (userMarker) {

                map.removeLayer(
                    userMarker
                );
            }


            userMarker =
                L.marker(
                    [lat, lng]
                )
                    .addTo(map)
                    .bindPopup(
                        "أنت هنا"
                    );


            document
                .getElementById(
                    "currentLocationText"
                )
                .textContent =
                "تم تحديد موقعك الحالي";


            try {

                const osmElements =
                    await fetchNearbyPlaces(
                        lat,
                        lng
                    );

                const osmPlaces =
                    convertPlaces(
                        osmElements
                    );


                let googlePlaces = [];

                if (
                    GOOGLE_MAPS_API_KEY.trim()
                ) {

                    googlePlaces =
                        await fetchGooglePlaces(
                            lat,
                            lng
                        );
                }


                /*
                   أهم تعديل:
                   mergePlaces الآن يضيف
                   MANUAL_SHOPS تلقائيًا.
                */

                allShops =
                    mergePlaces(
                        osmPlaces,
                        googlePlaces
                    );


                currentCategory =
                    "all";

                document
                    .getElementById(
                        "searchInput"
                    )
                    .value = "";


                updateActiveCategory();

                filterShops();


            } catch (error) {

                console.error(
                    error
                );

                /*
                   حتى لو OSM فشل،
                   المحلات اليدوية تظل موجودة.
                */

                allShops =
                    cloneManualShops();

                filterShops();

                alert(
                    "حدثت مشكلة أثناء تحميل الأماكن الخارجية، لكن المحلات المضافة يدويًا ما زالت ظاهرة."
                );
            }


            hideLoading();


            button.disabled = false;

            button.innerHTML = `

                <i class="fa-solid fa-location-crosshairs"></i>

                تم تحديد موقعي

            `;

        },


        error => {

            console.error(
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


            if (
                error.code ===
                error.PERMISSION_DENIED
            ) {

                message =
                    "يجب السماح للموقع من إعدادات المتصفح.";
            }


            alert(message);
        },


        {
            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0
        }
    );
}


/* =====================================================
   AREA SEARCH
===================================================== */

async function searchArea() {

    const input =
        document.getElementById(
            "areaInput"
        );

    const area =
        input.value.trim();


    if (!area) {

        alert(
            "اكتب اسم المنطقة أولًا."
        );

        return;
    }


    showLoading(
        "جاري البحث عن المنطقة وتحميل الأماكن..."
    );


    try {

        const location =
            await geocodeArea(
                area
            );


        if (!location) {

            alert(
                "لم نتمكن من العثور على المنطقة."
            );

            hideLoading();

            return;
        }


        const lat =
            location.lat;

        const lng =
            location.lng;


        currentLocation = {
            lat,
            lng
        };


        map.setView(
            [lat, lng],
            14
        );


        document
            .getElementById(
                "currentLocationText"
            )
            .textContent =
            `الموقع: ${location.name}`;


        if (userMarker) {

            map.removeLayer(
                userMarker
            );
        }


        userMarker =
            L.marker(
                [lat, lng]
            )
                .addTo(map)
                .bindPopup(
                    location.name
                );


        const osmElements =
            await fetchNearbyPlaces(
                lat,
                lng
            );

        const osmPlaces =
            convertPlaces(
                osmElements
            );


        let googlePlaces = [];

        if (
            GOOGLE_MAPS_API_KEY.trim()
        ) {

            googlePlaces =
                await fetchGooglePlaces(
                    lat,
                    lng
                );
        }


        /*
           المحلات اليدوية تدخل هنا أيضًا.
        */

        allShops =
            mergePlaces(
                osmPlaces,
                googlePlaces
            );


        currentCategory =
            "all";


        document
            .getElementById(
                "searchInput"
            )
            .value = "";


        updateActiveCategory();

        filterShops();


    } catch (error) {

        console.error(
            error
        );

        /*
           لا نخلي الخطأ يمسح المحلات اليدوية.
        */

        allShops =
            cloneManualShops();

        filterShops();

        alert(
            "حدث خطأ أثناء البحث عن المنطقة."
        );
    }


    hideLoading();
}


/* =====================================================
   GEOCODING
===================================================== */

async function geocodeArea(
    area
) {

    const url =
        CONFIG.nominatimUrl +

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


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    currentCategory =
                        button.dataset.category;

                    updateActiveCategory();

                    filterShops();


                    document
                        .getElementById(
                            "explore"
                        )
                        .scrollIntoView({
                            behavior: "smooth"
                        });
                }
            );
        }
    );
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

            button.classList.toggle(
                "active",

                button.dataset.category ===
                currentCategory
            );
        });
}


/* =====================================================
   SEARCH INPUT
===================================================== */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    input.addEventListener(
        "input",
        () => {

            filterShops();

        }
    );
}


/* =====================================================
   SHOW ALL
===================================================== */

function setupShowAll() {

    document
        .getElementById(
            "showAllBtn"
        )
        .addEventListener(
            "click",
            () => {

                currentCategory =
                    "all";

                document
                    .getElementById(
                        "searchInput"
                    )
                    .value = "";

                updateActiveCategory();

                filterShops();
            }
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
   AREA SEARCH BUTTON
===================================================== */

function setupAreaSearch() {

    document
        .getElementById(
            "areaSearchBtn"
        )
        .addEventListener(
            "click",
            searchArea
        );


    document
        .getElementById(
            "areaInput"
        )
        .addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    searchArea();
                }
            }
        );
}


/* =====================================================
   ADD SHOP
===================================================== */

function setupAddShop() {

    document
        .getElementById(
            "addShopBtn"
        )
        .addEventListener(
            "click",
            () => {

                alert(
                    "صفحة إضافة المحل سيتم ربطها بقاعدة البيانات في المرحلة التالية."
                );
            }
        );
}


/* =====================================================
   HELPERS
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


function escapeHTML(value) {

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

    return escapeHTML(value);
}


/* =====================================================
   INITIALIZATION
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

        setupAddShop();

        updateActiveCategory();


        /*
           زر تحديد الموقع
        */

        document
            .getElementById(
                "locationBtn"
            )
            .addEventListener(
                "click",
                loadUserLocation
            );
    }
);
