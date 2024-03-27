import React from "react";

import MainCarousel from "../../shared/components/Carosel/MainCarousel";
import CarouselWrapper from "../../shared/components/Carosel/CarouselWrapper";
import Button from "../../shared/components/FormElements/Button";

import image1 from "../../shared/components/assets/ProductImages/image.webp";
import image2 from "../../shared/components/assets/ProductImages/image2.webp";
import image3 from "../../shared/components/assets/ProductImages/image3.webp";

export default function Product() {

  

  const DUMMY_DATA = [
    {
      productId: "p1",
      images: [image1, image2, image3],
      ad_title:
        "Apple iPhone14 with bill,box in exclusive price refurbished model",
      description:
        "iPhone 13 pro max 256gb 96% battery health in immaculate condition for sale with original box, data cable and charger in scratch less mint condition fully laminated phone. face I'd not working out of warranty",
      price: "25,999",
      location: { country: "India", state: "Gujrat", city: "Surat" },
      userId: "u1",
      contact: { name: "Vishal Raj", contactNo: "8319428275" },
    },
    {
      productId: "p2",
      images: [image1, image2, image3],
      ad_title:
        "Samsung ipad with bill,box in exclusive price refurbished model",
      description:
        "Samsung ipad 256gb 96% battery health in immaculate condition for sale with original box, data cable and charger in scratch less mint condition fully laminated phone. face I'd not working out of warranty",
      price: "24,999",
      location: { country: "India", state: "Gujrat", city: "Surat" },
      userId: "u2",
      contact: { name: "vaibhav", contactNo: "8319428275" },
    },
  ];

  
  const DUMMY_CAROUSEL_ITEMS = [
    {
      bigScreen: true,
      alt: "Furniture Image",
      src: image1,
    },
    {
      bigScreen: true,
      alt: "Books Image",
      src: image2,
    },
    {
      bigScreen: true,
      alt: "Electronics Images",
      src: image3,
    },
    {
      bigScreen: false,
      alt: "Electronics Images",
      src: image1,
    },
    {
      bigScreen: false,
      alt: "Electronics Images",
      src: image2,
    },
    {
      bigScreen: false,
      alt: "Electronics Images",
      src: image3,
    },
  ];

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-10/12 flex flex-col lg:flex-row justify-center">
        <div className="w-full my-3 lg:px-3 lg:w-4/6">
          <CarouselWrapper>
            <MainCarousel
              items={DUMMY_CAROUSEL_ITEMS}
              imageClasses="bg-black h-96"
              className="h-"
              deviceType="mobile"
            />
          </CarouselWrapper>
          <div className="w-full py-3">
            <h1 className="text-2xl">Description</h1>
            <p>{DUMMY_DATA[0].description}</p>
          </div>
        </div>
        <div className="w-full my-3 lg:px-3 lg:w-2/6">
          <div className="w-full py-3">
            <h1>₹ {DUMMY_DATA[0].price}</h1>
            <h1>{DUMMY_DATA[0].ad_title}</h1>
            <div className="flex justify-end ">
              <h1 className="px-2">{DUMMY_DATA[0].location.country}</h1>
              <h1 className="px-2">{DUMMY_DATA[0].location.state}</h1>
              <h1 className="px-2">{DUMMY_DATA[0].location.city}</h1>
            </div>
          </div>
          <div className="w-full py-3">
            <h1 className="text-2xl">Contact Now</h1>
            <h1>User: {DUMMY_DATA[0].contact.name}</h1>
            <h1>Contact Number: {DUMMY_DATA[0].contact.contactNo}</h1>
          </div>
          <div className="w-full py-3">
            <Button
              className="rounded-md text-sm my-8 border-2 w-36 py-3 border-black bg-BackDropMain lg:text-lg"
              type="submit"
            >
              Offer Deal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
