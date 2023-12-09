export interface Product {
  id: number;
  userId: number;
  name: string;
  image: string;
  description: string;
  productCategory: string;
  price: number;
  sales: number;
}

const products: Product[] = [
  {
    id: 1,
    userId: 1,
    name: "Somethingstreetbkk",
    image:
      "https://bestiebrand.com/wp-content/uploads/2022/07/shutterstock_739755505.jpg",
    description:
      "A Korean fashion store that emphasizes street style, offering a variety of clothing for both men and women. The store provides a wide range of options, including T-shirts, shirts, jeans, warm pants, and many more",
    productCategory: "Clothes",
    price: 100,
    sales: 10,
  },
  {
    id: 2,
    userId: 2,
    name: "Evefiizshop",
    image: "https://bestiebrand.com/wp-content/uploads/2022/07/kr2.png",
    description:
      "TFalling in love with this store shouldn't be difficult, especially if you're into Oversize shirts. They have a plethora of options in this style, with beautiful and plentiful patterns. However, aside from Oversize shirts, they also offer various other styles for you to choose from.",
    productCategory: "Clothes",
    price: 50,
    sales: 5,
  },
  {
    id: 3,
    userId: 3,
    name: "_aboutboy",
    image: "https://bestiebrand.com/wp-content/uploads/2022/07/kr3.png",
    description:
      "A Korean men's clothing store with a focus on a minimalistic and sophisticated style. The store offers a variety of options, including plain T-shirts or T-shirts with patterns. In the trouser section, you can find shorts, jeans, slacks, and various other accessories to choose from. Look refined and sharp with their diverse selection.",
    productCategory: "Clothes",
    price: 80,
    sales: 8,
  },
  {
    id: 4,
    userId: 4,
    name: "seoulcloset_",
    image: "https://bestiebrand.com/wp-content/uploads/2022/07/kr4.png",
    description:
      "Let's switch gears and talk about Korean clothing for the ladies! This store specializes in selling cute, pastel-colored clothes. The store regularly posts new clothing items, so if you want to look stylish and chic like a Korean girl, you'll need to rely on the speed of your CF (Commercial Film) to keep up.",
    productCategory: "Clothes",
    price: 150,
    sales: 15,
  },
  {
    id: 5,
    userId: 5,
    name: "Amity_clothes",
    image: "https://bestiebrand.com/wp-content/uploads/2022/07/kr5.png",
    description:
      "This Korean clothing store for ladies is likely to be a favorite among those who love wearing crop tops or waist-flattering shirts. They offer a wide variety, ensuring that each piece is adorable. Guaranteed to be cute in every way!",
    productCategory: "Clothes",
    price: 200,
    sales: 20,
  },
  {
    id: 6,
    userId: 6,
    name: "yourspectacles",
    image: "https://bestiebrand.com/wp-content/uploads/2022/07/kr6.png",
    description:
      "This store has a plethora of stylish shirts and pants to choose from, catering not only to the street style enthusiasts but also to those who want to dress up in a more sophisticated manner. Whether you're aiming for a chic, casual look or a more refined style, this store has got you covered.",
    productCategory: "Clothes",
    price: 250,
    sales: 25,
  },
  {
    id: 6.1,
    userId: 6,
    name: "yourspectacles",
    image:
      "https://cheechongruay.smartsme.co.th/media/Epr0MUR9gUP193WFiZ2QSOdHy2XeQTinpxnXD8cnhw.jpg",
    description:
      "This store has a plethora of stylish shirts and pants to choose from, catering not only to the street style enthusiasts but also to those who want to dress up in a more sophisticated manner. Whether you're aiming for a chic, casual look or a more refined style, this store has got you covered.",
    productCategory: "Clothes",
    price: 250,
    sales: 25,
  },
  {
    id: 6.2,
    userId: 6,
    name: "Matantes",
    image:
      "https://s.isanook.com/wo/0/ud/44/223657/223657-thumbnail.jpg?ip/crop/w670h402/q80/jpg",
    description:
      "This store has a plethora of stylish shirts and pants to choose from, catering not only to the street style enthusiasts but also to those who want to dress up in a more sophisticated manner. Whether you're aiming for a chic, casual look or a more refined style, this store has got you covered.",
    productCategory: "Clothes",
    price: 250,
    sales: 25,
  },
  {
    id: 7,
    userId: 1,
    name: "Football",
    image: "https://cz.lnwfile.com/_/cz/_raw/wu/qp/jp.jpg",
    description:
      "(100% Genuine) Molten F5A1000 Soccer Ball, Authentic, Genuine Leather Football, Size 5, New Model.",
    productCategory: "Sports",
    price: 100,
    sales: 10,
  },
  {
    id: 8,
    userId: 2,
    name: "Yonex B4000",
    image: "https://cz.lnwfile.com/_/cz/_raw/30/jl/5m.jpg",
    description:
      "(100% Genuine) Yonex B4000 Badminton Racket with Carrying Case.",
    productCategory: "Sports",
    price: 50,
    sales: 5,
  },
  {
    id: 9,
    userId: 3,
    name: "Yonex MAVIS 350",
    image: "https://cz.lnwfile.com/_/cz/_raw/jf/04/p9.jpg",
    description:
      "(100% Genuine) Yonex MAVIS 350 Nylon Badminton Shuttlecocks, Pack of 6, Silver Cap.",
    productCategory: "Sports",
    price: 80,
    sales: 8,
  },
  {
    id: 10,
    userId: 4,
    name: "PVC Jump Rope",
    image: "https://cz.lnwfile.com/_/cz/_raw/bm/ju/b7.jpg",
    description:
      "(100% Genuine) PVC Jump Rope for Muay Thai, Suitable for those looking to train muscle strength.",
    productCategory: "Sports",
    price: 150,
    sales: 15,
  },
  {
    id: 11,
    userId: 5,
    name: "MARATHON MT201",
    image: "https://cz.lnwfile.com/_/cz/_raw/e2/qk/nf.jpg",
    description:
      "(100% Genuine) Volleyball, MT201 Marathon, Competition Standard, 100% Authentic.",
    productCategory: "Sports",
    price: 200,
    sales: 20,
  },
  {
    id: 12,
    userId: 6,
    name: "MARKER",
    image: "https://cz.lnwfile.com/_/cz/_raw/c8/1j/a8.jpg",
    description:
      "(ของแท้ 100%) มาร์คเก้อ ชุด 20 ชิ้น ชนิดหนา 1 มิลลิเมตร อุปกรณ์ฝึกซ้อม เทรนนิ่ง ฟุตบอล บาสเกตบอล วอลเลย์ แกรนด์สปอร์ต",
    productCategory: "Sports",
    price: 250,
    sales: 25,
  },
  {
    id: 13,
    userId: 1,
    name: "Dr.martens Adrian ",
    image:
      "https://preview.redd.it/finally-got-my-first-pair-of-dr-martens-with-the-adrian-v0-mmxz576olfba1.jpg?width=1152&format=pjpg&auto=webp&s=2ba2f6794fad3733410c7d9b223946c3f9fd1e45",
    description:
      "Dr. Martens Adrian, second-hand, no box, in excellent condition and very rare to find. Size 41/7UK, 26 cm. Price: 2,390 Baht.",
    productCategory: "Shoes",
    price: 2390,
    sales: 10,
  },
  {
    id: 14,
    userId: 2,
    name: "Nike Dunk Low World Champs Black White",
    image:
      "https://d2cva83hdk3bwc.cloudfront.net/nike-dunk-low-world-champs-black-white-1.jpg",
    description:
      "Brand: Nike SKU: DR9511-100 Color: White/Black  Release Date: 07/08/2022Tag Price: ฿4,300",
    productCategory: "Shoes",
    price: 50,
    sales: 5,
  },
  {
    id: 15,
    userId: 3,
    name: "Nike Kwondo 1 G-Dragon Peaceminusone Panda",
    image:
      "https://d2cva83hdk3bwc.cloudfront.net/g-dragon-x-nike-kwondo-1-panda--1.jpg",
    description:
      "Brand: Nike SKU: DH2482-101 Color: Black/White Release Date: 18/04/2023 Tag Price: ฿6,800",
    productCategory: "Shoes",
    price: 6800,
    sales: 8,
  },
  {
    id: 16,
    userId: 4,
    name: "Nike X Sacai Magmascape SP Varsity Royal",
    image:
      "https://d2cva83hdk3bwc.cloudfront.net/nike-x-sacai-magmascape-sp-varsity-royal-1.jpg",
    description: "Brand: Nike Magmascape SKU: DD1875-400 Color: Blue/White",
    productCategory: "Shoes",
    price: 150,
    sales: 15,
  },
  {
    id: 17,
    userId: 5,
    name: "Jordan 1 Retro High OG Court Purple 2020",
    image:
      "https://d2cva83hdk3bwc.cloudfront.net/jordan-1-retro-high-og-court-purple-2020-1.jpg",
    description: "Brand: Jordan SKU: 555088-500 Color: Purple/White",
    productCategory: "Shoes",
    price: 11300,
    sales: 20,
  },
  {
    id: 18,
    userId: 6,
    name: "Nike Air Adjust Force Ambush ",
    image:
      "https://d2cva83hdk3bwc.cloudfront.net/nike-air-adjust-force-ambush-light-madder-root-burgundy-crush-3.jpg",
    description:
      "Brand: Nike SKU: CZ3594-600 Color: Red/White Release Date: 01/07/2022",
    productCategory: "Shoes",
    price: 5290,
    sales: 25,
  },
  {
    id: 19,
    userId: 1,
    name: "Arduino Board ",
    image: "https://ct.lnwfile.com/_/ct/_raw/ps/7b/6z.jpg",
    description:
      "Arduino starter kit for students and project enthusiasts, available at the electronic equipment store Ban Mo Krung Thep. It comes with various electronic components and spare parts for purchase. The store offers both retail and wholesale options with reasonable prices.",
    productCategory: "Electronics",
    price: 100,
    sales: 10,
  },
  {
    id: 20,
    userId: 2,
    name: "LED3WATT HI POWER WHITE",
    image: "https://ct.lnwfile.com/_/ct/_raw/rt/w7/lg.jpg",
    description:
      "Arduino starter kit for students and project enthusiasts, available at the electronic equipment store Ban Mo Krung Thep. It comes with various electronic components and spare parts for purchase. The store offers both retail and wholesale options with reasonable prices.",
    productCategory: "Electronics",
    price: 28,
    sales: 5,
  },
  {
    id: 21,
    userId: 3,
    name: "Battery",
    image: "https://ct.lnwfile.com/_/ct/_raw/pr/53/kc.jpg",
    description:
      "Batteries come in various shapes and sizes, ranging from small cells providing power to devices like hearing aids and wristwatches to larger bank batteries ready to supply energy to telecommunication networks and computer data centers.",
    productCategory: "Electronics",
    price: 31,
    sales: 8,
  },
  {
    id: 22,
    userId: 4,
    name: "Box",
    image: "https://ct.lnwfile.com/_/ct/_raw/nf/ci/bw.jpg",
    description:
      "A transparent parts box with clear compartments for organizing electronic components. The box has steel edges, layered shelves for placing components, and is designed for storing various electronic equipment.",
    productCategory: "Electronics",
    price: 300,
    sales: 15,
  },
  {
    id: 23,
    userId: 5,
    name: "Maxx Tronic",
    image: "https://ct.lnwfile.com/_/ct/_raw/7u/sv/85.jpg",
    description:
      "Maxx Tronic module kit is designed to provide convenience for users. Each circuit is tailored for various applications such as security systems, control of electrical devices, sports, and education.",
    productCategory: "Electronics",
    price: 350,
    sales: 20,
  },
  {
    id: 24,
    userId: 6,
    name: "IC/TR/MOSFET/IGBT/THYSITER/TRIAC",
    image: "https://ct.lnwfile.com/_/ct/_raw/7w/h9/lm.jpg",
    description: "",
    productCategory: "Electronics",
    price: 15,
    sales: 25,
  },
  {
    id: 25,
    userId: 1,
    name: "Hanz",
    image:
      "https://www.konceptfurniture.com/media/catalog/product/1/9/19196890.jpg?optimize=medium&fit=bounds&height=700&width=700&canvas=700:70",
    description: "Hanz Open Wardrobe Model in Light Wood Color ",
    productCategory: "Furniture",
    price: 100,
    sales: 10,
  },
  {
    id: 26,
    userId: 2,
    name: "Bed",
    image:
      "https://www.konceptfurniture.com/media/catalog/product/1/9/19224727-31.jpg?optimize=medium&fit=bounds&height=700&width=700&canvas=700:700",
    description: "Pearliz 5-Foot Bed in White",
    productCategory: "Furniture",
    price: 28,
    sales: 5,
  },
  {
    id: 27,
    userId: 3,
    name: "Table",
    image:
      "https://www.konceptfurniture.com/media/catalog/product/5/9/59019485-31_1.jpg?optimize=medium&fit=bounds&height=700&width=700&canvas=700:700",
    description: "Backus Work Desk Set, Size 160 cm.",
    productCategory: "Furniture",
    price: 31,
    sales: 8,
  },
  {
    id: 28,
    userId: 4,
    name: "Gaila",
    image:
      "https://www.konceptfurniture.com/media/catalog/product/1/9/19226048-_gailasl_.jpg?optimize=medium&fit=bounds&height=700&width=700&canvas=700:700",
    description: "Backus Work Desk Set, Size 160 cm.",
    productCategory: "Furniture",
    price: 300,
    sales: 15,
  },
  {
    id: 29,
    userId: 5,
    name: "Sideboard",
    image:
      "https://www.konceptfurniture.com/media/catalog/product/_/-/_-_14-52.jpg?optimize=medium&fit=bounds&height=700&width=700&canvas=700:700",
    description: "KC-PLAY WIB Model Light Wood Color Sideboard",
    productCategory: "Furniture",
    price: 350,
    sales: 20,
  },
  {
    id: 30,
    userId: 6,
    name: "Bedroom Set",
    image:
      "https://www.konceptfurniture.com/media/catalog/product/5/9/59022171-monteo-furniture-bedroom-furniture-bedroom-sets-06_6.jpg?optimize=medium&fit=bounds&height=700&width=700&canvas=700:700",
    description: "Monteo 6-Foot Bedroom Set in Oak Color",
    productCategory: "Furniture",
    price: 15,
    sales: 25,
  },
];

export default products;

export function addProduct(product: Product) {
  products.push(product);
}
