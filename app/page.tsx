"use client"
import { Navbar } from "@/components/navbar"
import { CarouselContainer } from "@/components/CarouselContainer"
import { Footer } from "@/components/Footer"
import { MovieList } from "@/components/MovieList"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Cards } from "@/components/Cards"
import { useState } from "react"
import { MovieType } from "@/lib/types"
import { url } from "inspector"

const Home= ()=>{
const [movies, setMovies] = useState<MovieType[]>();
 
     const card1: MovieType[]= [
      {
        
        text: "Ornella Binni",
       image: ["/slide1.png"],
      },
      {
        text: "Tom Byrom",
       image: ["/slide2.png"],
      },
      {
        text: "Vladimir Malyavko",
       image: ["/slide3.png"],
      },
      {
        text: "Vladimir Malyavko",
       image: ["/slide4.png"],
      },
      {
        text: "Vladimir Malyavko",
       image: ["/slide5.png"],
      },
  
      {
        text: "Vladimir Malyavko",
       image: ["/slide6.png"],
      },
      {
        text: "Vladimir Malyavko",
       image: ["/slide7.png"],
      },
      {
        text: "Vladimir Malyavko",
       image: ["/slide8.png"],
      },
      {
        text: "Vladimir Malyavko",
       image: ["/slide9.png"],
      },
      {
        text: "Vladimir Malyavko",
       image: ["/slide10.png"],
      },
    ]
    const card2: MovieType[]= [
        {
          text: "Ornella Binni",
         image: ["https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Tom Byrom",
         image: ["https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
            text: "Vladimir Malyavko",
           image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
          },
          {
            text: "Vladimir Malyavko",
           image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
          },
      
      ]
      const card3: MovieType[]= [
        {
          text: "Ornella Binni",
         image: ["https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Tom Byrom",
         image: ["https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
          text: "Vladimir Malyavko",
         image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
        },
        {
            text: "Vladimir Malyavko",
           image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
          },
          {
            text: "Vladimir Malyavko",
           image: ["https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"],
          },
      
      ]


return(


  <ScrollArea className="flex flex-col justify-center items-center w-full">
    <div className="justify-center flex-col flex items-center">
  <Navbar />
  </div>
  <div className="mt-10 w-[2255px]  flex flex-col ">
    <CarouselContainer />
  </div>
  <div className="flex mt-10 flex-col gap-12 w-full">
    <MovieList text="Upcoming" movies={card1} />
    <MovieList text="Popular" movies={card2} />
    <MovieList text="Top Rated" movies={card3} />
  </div> 
  <Footer />
</ScrollArea>
 
)
}
export default Home