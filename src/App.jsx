import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./Component/Common/Navbar";
import Footer from "./Component/Common/Footer";

// Pages
import Home from "./Component/Pages/Home";
import Blog from "./Component/Pages/Blog";
import Faqs from "./Component/Pages/Faqs";
import PrivacyPolicy from "./Component/Pages/PrivacyPolicy";
import TrackOrder from "./Component/Instagram/Trackoder";
import RefundPolicy from "./Component/Instagram/Refundpolicy";
import TiktokOrderSummary from "./Component/TikTok/Tiktokordersummery";
// YouTube Components
import ChannelCards from "./Component/YouTube/ChannelSubscribers/Channelcards";
import Buynowyoutube from "./Component/YouTube/buynowyoutube";
import YtorderSummary from "./Component/YouTube/Ytordersummery";
import Ytpayment from "./Component/YouTube/Ytpayment";
import Videoviewscards from "./Component/YouTube/videoviews/Videoviewscards";
import Videolikescards from "./Component/YouTube/Videolikes/Videolikescards";
import Videosharecards from "./Component/YouTube/videoshare/Videosharecards";
import LifestreamCards from "./Component/YouTube/Lifestream/Lifestreamcards";
import ChannelwatchtimeCards from "./Component/YouTube/channalwatchtime/Channalwatchcards";
// Facebook Components
import CardsFacebookFollowers from "./Component/Facebook/FacebookFolowers/cardsFacebookFollowers";
import BuyNowFacebook from "./Component/Facebook/BuyNowFacebook";
import Buynowtiktok from "./Component/TikTok/buynowtiktok";
import Tiktokpayment from "./Component/TikTok/Tiktokpayment";
import Cardslike from "./Component/TikTok/TiktokLikes/cards-likes";
import PricingCard from "./Component/TikTok/TiktokFollowers/cards-followers";
import Cardsview from "./Component/TikTok/TiktokViews/cards-views";
import FbOrderSummary from "./Component/Facebook/FbOrderSummary";
import FbPayment from "./Component/Facebook/FbPayment";
import CardsFacebookPageLikes from "./Component/Facebook/FacebookPageLikes/cardsFacebookPageLikes";
import CardsFemaleFollowers from "./Component/Facebook/FemaleFollowers/cards-FemaleFollowers";
import CardsEngFollower from "./Component/Facebook/EnglishFollowers/cards-Engfollowers";
// Instagram Components
import Login from "./Component/Pages/Login";
import Instafollowerscards from "./Component/Instagram/InstagramFollowers/Instafollowerscard";
import BuyNowInstagram from "./Component/Instagram/BuyNowInstagram";
import InstaOrderSummary from "./Component/Instagram/InstaOrderSummary";
import InstaPayment from "./Component/Instagram/InstaPayment";
import Cardslikes from "./Component/Instagram/InstagarmLikes/cards-likes";
import Cardsviews from "./Component/Instagram/InstagramViews/cards-views";
import CardsReelsViews from "./Component/Instagram/InstagramReelsViews/CardsReelViews";
import CardsStoryViews from "./Component/Instagram/InstagramStoryViews/cardsStoryViews";
import CardsComments from "./Component/Instagram/InstagramComments/cards-Comments";
import "./App.css";

// Facebook Components

// TikTok Components

function App() {
  return (
    <div className="relative">
      <div className="animated-background" />
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Blog & FAQs */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/Pages/Login" element={<Login />} />

          {/* Instagram Routes */}
          <Route
            path="/Instagram/InstagramFollowers/Instafollowerscards"
            element={<Instafollowerscards />}
          />
          <Route
            path="/Instagram/InstagarmLikes/CardsLikes"
            element={<Cardslikes />}
          />
          <Route
            path="/Instagram/InstagramViews/Cardsviews"
            element={<Cardsviews />}
          />
          <Route
            path="/Instagram/InstagramReelsViews/CardsReelsViews"
            element={<CardsReelsViews />}
          />
          <Route
            path="/Instagram/InstagramStoryViews/CardsStoryViews"
            element={<CardsStoryViews />}
          />
          <Route
            path="/Instagram/InstagramComments/ CardsComments"
            element={<CardsComments />}
          />
          <Route path="/BuyNowInstagram" element={<BuyNowInstagram />} />
          <Route path="/InstaOrderSummary" element={<InstaOrderSummary />} />
          <Route path="/InstaPayment" element={<InstaPayment />} />

          {/* YouTube Routes */}
          <Route
            path="/Youtube/ChannelSubscriber/ChannelCards/ChannelCards"
            element={<ChannelCards />}
          />
          <Route
            path="/YouTube/videoviews/Videoviewscards"
            element={<Videoviewscards />}
          />
          <Route
            path="/YouTube/Videolikes/Videolikescards"
            element={<Videolikescards />}
          />
          <Route
            path="/YouTube/videoshare/Videosharecards"
            element={<Videosharecards />}
          />
          <Route
            path="/YouTube/Lifestream/LifestreamCards"
            element={<LifestreamCards />}
          />
          <Route
            path="/YouTube/channalwatchtime/ChannelwatchtimeCards"
            element={<ChannelwatchtimeCards />}
          />
          <Route path="/buynowyoutube" element={<Buynowyoutube />} />
          <Route path="/Ytordersummery" element={<YtorderSummary />} />
          <Route path="/Ytpayment" element={<Ytpayment />} />
          {/* TikTok Routes */}
          <Route
            path="//TikTok/TiktokFollowers/PricingCards"
            element={<PricingCard />}
          />
          <Route
            path="/TikTok/TiktokViews/Cardsviews"
            element={<Cardsview />}
          />
          <Route
            path="/TikTok/TiktokLikes/Cardslikes"
            element={<Cardslike />}
          />
          <Route path="/Buynowtiktok" element={<Buynowtiktok />} />
          <Route path="/Tiktokordersummery" element={<TiktokOrderSummary />} />
          <Route path="/Tiktokpayment" element={<Tiktokpayment />} />
          {/* Facebook Routes */}
          <Route
            path="/Facebook/FacebookFolowers/CardsFacebookFollowers"
            element={<CardsFacebookFollowers />}
          />
          <Route
            path="/Facebook/FemaleFollowers/CardsFemaleFollowers"
            element={<CardsFemaleFollowers />}
          />
          <Route
            path="/Facebook/EnglishFollowers/CardsEngFollowers"
            element={<CardsEngFollower />}
          />
          <Route
            path="/Facebook/FacebookPageLikes/CardsFacebookPageLikes"
            element={<CardsFacebookPageLikes />}
          />
          <Route path="/BuyNowFacebook" element={<BuyNowFacebook />} />
          <Route path="/FbOrderSummery" element={<FbOrderSummary />} />
          <Route path="/FbPayment" element={<FbPayment />} />
          {/* Policy and Order Routes */}
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TrackOrder" element={<TrackOrder />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
