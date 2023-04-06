import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ graphql }) => {

  const result = await graphql<Queries.CreatePagesQuery>(`#graphql
    query CreatePages {
      site {
        siteMetadata {
          title 
        }
      }
    }
  `);

  console.log(JSON.stringify(result, null, 2));
};