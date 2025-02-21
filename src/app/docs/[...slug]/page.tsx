/** Catch all Segments is used when we need to create components for dynamic ategory and subcategories 
 * i.e if we have 5 categories and each category has 6 sub catgeories then 
 * we need to create total 30 components  using next js to avoid this we use catch all segments concepts
 * where by creating one component dynamically to get 30 or more compoentns at a time based on path length 
 * 
 */

const Docs = ({ params }: {
    params: {
      slug?: string[];
    };
  }) => {
    if (!params.slug) {
      return <p>Docs Home Page</p>;
    }
  
    switch (params.slug.length) {
      case 2:
        return (
          <p>
            Doc Page of feature {params.slug[0]} for concept{" "}
            {params.slug[1]}
          </p>
        );
      case 1:
        return <p>Doc Page of {params.slug[0]}</p>;
      default:
        return <p>Doc Page</p>;
    }
  };

export default Docs