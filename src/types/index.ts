export interface ProductData {
  name: string;
  price: string;
  priceValue: number;
  description: string;
  category: string;
  imageUrl: string;
  paymentUrl: string;
}

export const PRODUCT: ProductData = {
  name: "Inglês online-Axe",
  price: "49,99",
  priceValue: 49.99,
  description: "Estude de forma prática e flexível e desenvolva suas habilidades em inglês para o dia a dia e o trabalho",
  category: "Education",
  imageUrl: "https://ais-dev-on55b7ye4vprdve6c3kp2x-164657436309.us-west2.run.app/src/assets/images/conversational_mentorship_1791508352514.jpg",
  paymentUrl: "https://buy.stripe.com/test_00w28scOr8AJ1zQ7C1bsc00",
};
