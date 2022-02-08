import { FoodList } from "./foodlist";

export interface Order {
    foodlist:FoodList[
    ],
    totalPrice:number,
    orderId:string,
    useremail:string,
    date:Date,
    status:string,
    dTime:number
}