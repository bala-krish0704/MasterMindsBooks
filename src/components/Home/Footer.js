
export function Footer() {
    return (
        <div id="footer" class="mt-5 p-4 bg-dark text-white col">
            <div class="row container">
                <div id class="col-xl-4 col-lg-6 col-md-8 col-sm-10 p-3">

                    <h6 class="text-white">News Letter</h6>
                    <form class="form-group">
                        <input type="email" name="emailnews" required class="form-control mt-2" placeholder="Enter your email id ........" id />
                        <input type="submit" name="submitnews" value="submit" class="btn btn-success mt-3" /> <br /> <br />
                    </form>
                </div>
                <div id class="col-xl-3 col-lg-6 col-md-8 col-sm-10 p-3">
                    <h6 class="text-white">Follow us </h6>
                    <div id="social">
                        <a target="_block" class="text-white" href="#"> <i class="fab fa-facebook"></i></a>
                        <a target="_block" class="text-white" href="#"> <i class="fab fa-twitter-square"></i></a>
                        <a target="_block" class="text-white" href="#"> <i class="fab fa-whatsapp-square"></i></a>
                        <a target="_block" class="text-white" href="#"> <i class="fab fa-instagram"></i></a><span></span></div>
                </div>
                <div id class="col-xl-2 col-lg-6 col-md-8 col-sm-10 p-3">
                    <h6 class="text-white"> Information </h6>
                    <div class="ml-2">
                        <a target="_block" href="#" class="text-white">About Us </a> <br />
                        <a target="_block" href="#" class="text-white">Sell Book</a> <br />
                        <a target="_block" href="#" class="text-white">Track Order</a> <br />
                        <a target="_block" href="#" class="text-white">Contact us</a> <br />
                        <a target="_block" href="#" class="text-white">Our Coupon Partners</a> <br />
                        <a target="_block" href="#" class="text-white">Careers</a> <br />
                        <a target="_block" href="#" class="text-white">Terms of use& policy</a> <br />
                        <a target="_block" href="#" class="text-white">FAQ</a> <br />
                    </div>
                </div>
                <div id class="col-xl-3 col-lg-6 col-md-8 col-sm-10 p-3">
                    <h6 class="text-white">Points to Know </h6>
                    <p class="text-white">
                        <b>ABOUT US </b> <br />
                        Ever wanted to buy a book but could not because it was too expensive? worry not! because <b>Book store</b> is here! <b>Book store</b>, these days in news,is being called as the Robinhood of the world of books. <b> Book store </b> team is committed to bring to you all kinds of best books at the minimal prices ever seen anywhere. Yes, we are literally giving you away a steal.

                        <br /><b>SHOP ON APP</b><br />
                        Yes, We are on App. Just Search on play store/ App Store & install <b>Book store App</b>. Unlock lots of shopping options
                    </p>
                </div>
            </div>
            <hr class="bg-white" />
            <div class="row">
                <div id class="col-md p-3">

                    <p> <img src={require('../Home/Images/logo.png')} width="30" height="30" alt="" />&nbsp; &nbsp;Copyrights &copy; 2022, Master Minds Book ,Inc</p>
                </div>
                <div id class="col-md p-3 text-center">
                    <p> Designed by Master Minds</p>
                </div>
            </div>
        </div>
    );
}