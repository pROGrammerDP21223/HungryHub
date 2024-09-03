import Image from "next/image";
import CategoryList from "./_components/CategoryList";
import BusinessList from "./_components/BusinessList";


export default function Home() {

  return (
    <div className='md:px-20 px-10'>
<CategoryList />
<BusinessList />
    </div>
  );
}
