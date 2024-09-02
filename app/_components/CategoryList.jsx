"use client";
import React, { useState, useEffect } from 'react';
import GlobalApi from '../_utils/GlobalApi'; // Adjust the path as necessary
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'; // Adjust the path as necessary
import { Card, CardContent } from '@/components/ui/card'; // Adjust the path as necessary
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useSearchParams();
  const [selctectedCategory, setSelctectedCategory] = useState('all')
  useEffect(()=>{
    setSelctectedCategory(params.get('category'));
  },[params ])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resp = await GlobalApi.GetCategory();
        console.log(resp.categories);
        setCategoryList(resp.categories);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching categories: {error.message}</div>;
  if (categoryList.length === 0) return <div>No categories found.</div>;

  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {categoryList.map((category, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
              <Link href={'?category='+category.slug}>
                <CardContent className={`flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 hover:border-primary hover:bg-orange-50 cursor-pointer group ${selctectedCategory==category.slug&&'text-primary border-primary bg-orange-50'}`}>
                 
                  {category.icon?.url && (
                    <Image className='group-hover:scale-125 transition-all duration-200'
                      src={category.icon.url}
                      alt={category.name}
                      width={40}
                      height={40}
                    />
                  )}
                  <h2 className='text-sm- font-medium group-hover:text-primary'>{category.name}</h2>
                 
                </CardContent>
                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CategoryList;
