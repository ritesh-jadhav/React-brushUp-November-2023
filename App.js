import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * // React.createElement => object => HtmlElement(render)

const heading = React.createElement("h1",{id: "heading"},"React element");

// JSX - Html-likely syntax that understand by JS engine  
// JSX => babel transpile it to React.createElement => ReactElement-JS Object => htmlElement(reder)

const jsxHeading = <h1 id="heading">React JSX element</h1>

const content = <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore nisi nobis eligendi illo ea et, dolorem voluptatum alias tempora repellat corrupti numquam officiis ipsam aliquid natus nemo dignissimos tenetur.</p>

// Functional Components 

const about = function (){
    return <h1>This is a functional component</h1>
}

const BrandTitle = () =>{
    return <div className="container">
        {about()}
        <h1 id="heading">React functional Component</h1>
        {content}
        {jsxHeading}
    </div>
}

 * 
 * 
 */

const data = [
  {
    info: {
      id: "9052",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Central Plaza, Kalina",
      areaName: "Santacruz East",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "9052",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=9500845~p=7~eid=0000018b-e10f-2d2a-5253-0e2600730750~srvts=1700287950122~45826",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-19 04:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                },
              },
            ],
          },
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=9052",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "258823",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "abbrtyuih9xpwsxi0znz",
      locality: "Barve Marg",
      areaName: "Kurla",
      costForTwo: "₹100 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "258823",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-19 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=258823",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "156134",
      name: "The Good Bowl",
      cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
      locality: "BKC FC",
      areaName: "Santacruz East",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "156134",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "7918",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-18 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=156134",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "28897",
      name: "Sbarro - New York Pizza",
      cloudinaryImageId: "kk66tath7avul39q9tif",
      locality: "Sion",
      areaName: "Sion",
      costForTwo: "₹300 for two",
      cuisines: ["Italian", "Pizzas", "Desserts", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "28897",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4800,
      },
      parentId: "179343",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=9493278~p=8~eid=0000018b-e10f-2d2a-5253-0e2700730853~srvts=1700287950122~45826",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-19 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=28897",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "28405",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "CST Road",
      areaName: "Santacruz East",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "28405",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "61955",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-19 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=28405",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "443511",
      name: "EatFit",
      cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
      locality: "CST Road",
      areaName: "Santacruz East",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "443511",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "76139",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-18 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "brand",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=443511",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "257810",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "CST Road",
      areaName: "Santacruz East",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "257810",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "319582",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=9215901~p=9~eid=0000018b-e10f-2d2a-5253-0e280073097c~srvts=1700287950122~45826",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=257810",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "678577",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
      locality: "Gaurav Industrial Estate",
      areaName: "Kurla West",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "678577",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3700,
      },
      parentId: "10655",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "15-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-19 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=678577",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "328134",
      name: "Sandwizzaa",
      cloudinaryImageId: "c8b7881c4c04ff816d4e356a106e7132",
      locality: "Swastik Industrial Estate",
      areaName: "Santacruz East",
      costForTwo: "₹300 for two",
      cuisines: ["Snacks", "Fast Food", "Beverages", "Jain"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "328134",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3700,
      },
      parentId: "2484",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=9157893~p=11~eid=0000018b-e10f-2d2a-5253-0e2a00730b13~srvts=1700287950122~45826",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-18 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=328134",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "323707",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "KURLA",
      areaName: "Saki Naka",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "323707",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "5588",
      avgRatingString: "4.0",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "42 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-18 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=323707",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "27812",
      name: "Natural Ice Cream",
      cloudinaryImageId: "p5pu4no5kwgf0pqokpkj",
      locality: "Kalina market santacruz east",
      areaName: "Santacruz East",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      feeDetails: {
        restaurantId: "27812",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "2093",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-18 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=27812",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "342079",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId: "cace805a6ba74137571d0f7ac92302b1",
      locality: "Bandra Kurla Complex",
      areaName: "Scruz Bandra East",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Fast Food",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "342079",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4600,
      },
      parentId: "281782",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-18 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=342079",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "247275",
      name: "Shreenath Sweets, Snacks And Farsan",
      cloudinaryImageId: "7837893c064e08c7378ce7d7ff5ea9d6",
      locality: "shastri Nagar",
      areaName: "kalina kurla ",
      costForTwo: "₹150 for two",
      cuisines: ["Sweets", "Snacks", "Desserts"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "247275",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3700,
      },
      parentId: "186053",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-18 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=247275",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="data:image/png;base64,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"
          alt="logo"
          className="logo-image"
        />
      </div>
      <div className="nav-link">
        <ul className="nav-link-list">
          <li className="nav-items">Restaurant</li>
          <li className="nav-items">Explore tradition</li>
          <li className="nav-items">offer</li>
          <li className="nav-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="rest-container">
      <div className="search">
        <label htmlFor="search-box">Search </label>
        <input id="search-box" type="search" placeholder="Explore kitchens" />
      </div>
      <div className="card-container">
        {data.map(restro => <Card key={restro.info.id} name={restro.info.name} avgRating={restro.info.avgRating} cloudinaryImageId={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restro.info.cloudinaryImageId} />)}
      </div>
    </div>
  );
};

const Card = ({name,avgRating,cloudinaryImageId}) => {
  
  return (
    <div className="card">
      <div className="card-title">{name}</div>
      <div className="card-image">
        <img
          src={cloudinaryImageId}
        />
      </div>
      <div className="card-rating">
        <h6>{avgRating}</h6>
      </div>
      <div className="card-caption">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rem!
        </p>
      </div>
    </div>
  );
};
const AppLayout = () => (
  <div>
    <div className="container">
      <Header />
      <Body />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);  
