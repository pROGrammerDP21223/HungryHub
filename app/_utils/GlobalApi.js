import { gql, request } from 'graphql-request'

const MASTER_URL=process.env.NEXT_PUBLIC_BACKEND_API_URL;

const GetCategory=async()=>{
    const query=gql`
    query Categories {
        categories(first: 50) {
          id
          name
          slug
          icon {
            url
          }
        }
      }
    `
const result= await request(MASTER_URL,query);
return result;
}
const GetBusiness = async(category)=>{
  const query=gql`
    query GetBusiness {
  resturants(
    where: {categories_some: {slug:"`+category+`"}}
  ) {
    aboutUs
    address
    banner {
      url
    }
    categories {
      name
    }
    id
    name
    restotype
    workingHours
  }
}
    `
    const result= await request(MASTER_URL,query);
return result;
}

export default{
    GetCategory,
GetBusiness
}