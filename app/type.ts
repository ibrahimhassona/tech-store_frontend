import React from "react";

 export interface CustomButtonProps{
    Icon?:React.FC;
    Content:string;
    Style:string;
    Page:string
    className?:string
}
export interface LogoProps{
    sizeH : string;
    sizeS : string;
}


export interface ProductProp {
    id: number;
    attributes: {
      title: string;
      desc: string;
      categories:{data:[]};
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
        attributes: {
          url: string;
          price: number;
          isAvailable: boolean;
          desc: string;
        };
      };
      data: {
        attributes: {
          price: number;
          isAvailable: boolean;
        };
      };
      price: number;
      isAvailable: boolean;
    };
  }