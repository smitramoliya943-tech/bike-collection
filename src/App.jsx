import Header from "./components/heder";
import Home from "./components/home";
import Footer from "./components/footer";

const bikes = [
    {
        name: "BMW M 1000 RR",
        model: "M 1000 RR",
        price: "₹49.00 Lakh",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87"
    },
    {
        name: "Kawasaki Ninja H2",
        model: "Ninja H2",
        price: "₹79.90 Lakh",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc"
    },
    {
        name: "Suzuki Hayabusa",
        model: "Hayabusa",
        price: "₹16.90 Lakh",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39"
    },
    {
        name: "Ducati Panigale V4",
        model: "Panigale V4",
        price: "₹27.72 Lakh",
        image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d"
    },
    {
        name: "Yamaha YZF-R1",
        model: "YZF-R1",
        price: "₹20.39 Lakh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jwEHIBqOTOb_HcqDqgMxfbz1M5zJJ4q8D0XDKG1FzA&s=10"
    },
    {
        name: "Honda CBR1000RR",
        model: "CBR1000RR",
        price: "₹23.11 Lakh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMHY_tDG8Auwm4_AWpMGk9cLxHHaPyoneBoijWhOs8g&s=10"
    },
    {
        name: "KTM 1290 Super Duke",
        model: "1290 Super Duke R",
        price: "₹18.50 Lakh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4uAE7pmK19Bk4lL0VC-RTHCONe6yons8-aZ-s27KZA&s=10 "
    },
    {
        name: "Triumph Street Triple",
        model: "Street Triple 765",
        price: "₹10.43 Lakh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9obNL5qHiMqc0orIOOeasDFH8dwtKNH3VUKLOJkY85Q&s=10"
    },
    {
        name: "Aprilia RSV4",
        model: "RSV4 Factory",
        price: "₹31.26 Lakh",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87"
    },
    {
        name: "Harley-Davidson Sportster",
        model: "Sportster S",
        price: "₹16.50 Lakh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0J7kA_BPKbjHxKNZnSBJta2k6qhEhAZsYXNM0ASHVQ&s=10"
    },
    {
        name: "Yamaha MT-15",
        model: "MT-15 V2",
        price: "₹1.70 Lakh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFtj24O-qHOruvVsAXeDs70rqIGBEnOxh4q8zRt07gA&s=10"
    },
    {
        name: "Kawasaki Z900",
        model: "Z900",
        price: "₹9.38 Lakh",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc"
    },
    {
        name: "Ducati Streetfighter V4",
        model: "Streetfighter V4",
        price: "₹24.62 Lakh",
        image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d"
    },
    {
        name: "Royal Enfield Continental GT",
        model: "Continental GT 650",
        price: "₹3.50 Lakh",
        image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6"
    },
    {
        name: "BMW S 1000 RR",
        model: "S 1000 RR",
        price: "₹20.75 Lakh",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87"
    }
];

function App() {
    return (
        <>
            <Header />
            <Home bikes={bikes}/> 
            <Footer />
        </>
    );
}

export default App;