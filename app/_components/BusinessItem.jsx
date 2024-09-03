import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

function BusinessItem({ business }) {
  return (
    <div className='hover:border-spacing-2  '>
      <Card className="w-[350px] hover:bg-orange-50 hover:border-primary transition-all duration-200 ease-in-out cursor-pointer">
        <CardHeader>
          <Image src={business.banner?.url} alt={business.name} width={500} height={130} className='h-[130px] ' />
          <CardTitle className="font-bold text-lg">{business.name}</CardTitle>
          <CardDescription className="flex justify-between">
            <div className='flex gap-2 items-center'>
              <Image src="/star.png" width={14} height={14} alt="Rating" />
              <label class="text-gray-400 text-sm">4.5</label>
              <h2 class="text-gray-400 text-sm">{business.restotype[0]}</h2>
            </div>
            <div>
              <h2 class="text-sm text-primary">{business.categories[0].name}</h2>
            </div>


          </CardDescription>
        </CardHeader>


      </Card>

    </div>
  )
}

export default BusinessItem