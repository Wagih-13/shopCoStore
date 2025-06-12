export const getAllProducts = async () => {
  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    const res = await req.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const getSpecificProduct = async (productId: string) => {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/${productId}`
    );
    const res = await req.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const getLimtProducts = async (limt: string) => {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products?limit=${limt}`
    );
    const res = await req.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllCategories = async () => {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`
    );
    const res = await req.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};


