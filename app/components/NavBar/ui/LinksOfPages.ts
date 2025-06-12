import { Menu } from "@/app/types/appTypes";

export const linksOfPages: Menu = [
  {
    path: "/",
    label: "Shop",
    isOpen: false,
    children: [
      { path: "/men-clothing", label: "Men's Clothing" }, // Men's Clothing
      { path: "/women-clothing", label: "Women's Clothing" }, // Women's Clothing
      { path: "/kids-clothing", label: "Kids' Clothing" }, // Kids' Clothing
      { path: "/footwear", label: "Footwear" }, // Footwear
      { path: "/electronics", label: "Electronics" }, // Electronics
      { path: "/home-decor", label: "Home Decor" }, // Home Decor
      { path: "/furniture", label: "Furniture" }, // Furniture
      { path: "/beauty-products", label: "Beauty Products" }, // Beauty Products
      { path: "/sports-gear", label: "Sports Gear" }, // Sports Gear
      { path: "/toys", label: "Toys" }, // Toys
      { path: "/accessories", label: "Accessories" }, // Accessories
      { path: "/grocery", label: "Grocery" }, // Grocery
      { path: "/jewelry", label: "Jewelry" }, // Jewelry
      { path: "/home-appliances", label: "Home Appliances" }, // Home Appliances
      { path: "/pet-supplies", label: "Pet Supplies" }, // Pet Supplies
      { path: "/health-products", label: "Health Products" }, // Health Products
      { path: "/baby-essentials", label: "Baby Essentials" }, // Baby Essentials
    ],
  },
  { path: "/category/123", label: "On Sale" },
  { path: "/", label: "New Arrivales" },
  {
    path: "/",
    label: "Branch",
    isOpen: false,
    children: [
      { path: "/clothing", label: "Clothing" }, // Clothing
      { path: "/shoes", label: "Shoes" }, // Shoes
      { path: "/electronics", label: "Electronics" }, // Electronics
      { path: "/furniture", label: "Furniture" }, // Furniture
      { path: "/beauty", label: "Beauty Products" }, // Beauty Products
      { path: "/books", label: "Books" }, // Books
      { path: "/sports", label: "Sports" }, // Sports
      { path: "/toys", label: "Toys" }, // Toys
      { path: "/accessories", label: "Accessories" }, // Accessories
      { path: "/grocery", label: "Grocery" }, // Grocery
      { path: "/jewelry", label: "Jewelry" }, // Jewelry
      { path: "/home-appliances", label: "Home Appliances" }, // Home Appliances
      { path: "/pet-supplies", label: "Pet Supplies" }, // Pet Supplies
      { path: "/health", label: "Health" }, // Health
      { path: "/baby-products", label: "Baby Products" }, // Baby Products
      { path: "/outdoor", label: "Outdoor" }, // Outdoor
      { path: "/gifts", label: "Gifts" }, // Gifts
    ],
  },
];
