import Header from "./Header";
import Hero from "./Hero";

import Ai from "./Ai";
import Footer from "./Footer";
import UniList from "./UniList";

import List from "../Uni Lists/list";
import Details from "../Uni Lists/Details";
import DiscussionForum from "./Discussion-Forum";
import TestPractice from "./Test-Practice";
function LandingPage() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Ai></Ai>
      <DiscussionForum></DiscussionForum>

      <UniList></UniList>
      <TestPractice></TestPractice>
      {/* <List></List> */}
      {/* <Details></Details> */}
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
