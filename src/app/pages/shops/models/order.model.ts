
export interface OrderModel {
    order_id:                  number;
    user_id:                   number;
    book_id:                  number;
    count:                     number;
    order_status:              string;
    createdAt:                 Date;
}