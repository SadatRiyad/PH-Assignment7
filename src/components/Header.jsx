const Header = () => {
    return (
        <div>
            {/* <!-- header start --> */}
            <header>
                <div className="container text-center mx-auto p-4">
                    <h1 className="text-xl sm:text-4xl md:text-5xl font-bold tracking-wide">
                        Discover an exceptional cooking <br />tailored for you!
                    </h1>
                    <p className="text-white opacity-70 mb-5 mt-7 text-sm px-4">Welcome to BB-Food, where culinary exploration knows no bounds! <br />Our mission is to transcend borders and bring people together through the universal language of food.
                    </p>
                    <a href="#"><button className="btn bg-green hover:bg-transparent border-green text-primary hover:text-white mt-12 m-4 rounded-full hover:-translate-y-1 transition-all duration-200">Explore Now</button></a>
                    <a href="#"><button className="btn bg-transparent hover:bg-green hover:border-green hover:-translate-y-1 transition-all duration-200 text-white hover:text-primary mt-2 rounded-full m-4">Our Feedback</button></a>
                </div>
            </header>
            {/* <!-- header end --> */}
        </div>
    );
};

export default Header;