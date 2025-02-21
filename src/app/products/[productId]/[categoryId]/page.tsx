// page.tsx

import { notFound } from "next/navigation";

const CategoryDetails = async ({ params }: { params: { productId: string; categoryId: number } }) => {
  // Make sure the params are awaited before accessing them
  if (params.categoryId > 1000) {
    notFound();  // Trigger 404 if the condition is met
  }

  return (
    <>
      <p>Product Details of {params.productId} of category {params.categoryId}</p>
    </>
  );
};

export default CategoryDetails;
