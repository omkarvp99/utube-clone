import React from "react";
import "./searchpage.css";

import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programing lessons here! Alsp expect progarming tips and tricks that will take your coding skills to the..."
      />

      <hr />

      <VideoRow
        views="293,381 views"
        subs="660K"
        description="You can find awesome programing lessons here! Alsp expect progarming tips and tricks that will take your coding skills to the..."
        timestamp="Jul 30, 2020"
        channel="Clever Programmer"
        title="🔴 Let Build a Tik Tok Clone with REACTJS for Beginners"
        image="https://i.ytimg.com/an_webp/KB7JEnfc7Dc/mqdefault_6s.webp?du=3000&sqp=CNW_tPwF&rs=AOn4CLBjuOktzxBVOUVGuOwccsfZYlmLtQ"
      />
      <VideoRow
        views="293,381 views"
        subs="660K"
        description="You can find awesome programing lessons here! Alsp expect progarming tips and tricks that will take your coding skills to the..."
        timestamp="Jul 30, 2020"
        channel="Clever Programmer"
        title="🔴 Let Build a Tik Tok Clone with REACTJS for Beginners"
        image="https://i.ytimg.com/an_webp/Ho41KNKvoBc/mqdefault_6s.webp?du=3000&sqp=CPvotPwF&rs=AOn4CLBWNvU1Ng_PUXvHyg1n4urMJ3wV3w"
      />
      <VideoRow
        views="293,381 views"
        subs="660K"
        description="You can find awesome programing lessons here! Alsp expect progarming tips and tricks that will take your coding skills to the..."
        timestamp="Jul 30, 2020"
        channel="Clever Programmer"
        title="🔴 Let Build a Tik Tok Clone with REACTJS for Beginners"
        image="https://i.ytimg.com/an_webp/f7T48W0cwXM/mqdefault_6s.webp?du=3000&sqp=CO3ztPwF&rs=AOn4CLAoqo-GO9ycniGS42pjDdUALfr3Vg"
      />
      <VideoRow
        views="293,381 views"
        subs="660K"
        description="You can find awesome programing lessons here! Alsp expect progarming tips and tricks that will take your coding skills to the..."
        timestamp="Jul 30, 2020"
        channel="Clever Programmer"
        title="🔴 Let Build a Tik Tok Clone with REACTJS for Beginners"
        image="https://i.ytimg.com/an_webp/byu5Z4i4JsU/mqdefault_6s.webp?du=3000&sqp=CP70tPwF&rs=AOn4CLB57xn5VQ6r8rWDFszQyDSadTGb3g"
      />
      <VideoRow
        views="293,381 views"
        subs="660K"
        description="You can find awesome programing lessons here! Alsp expect progarming tips and tricks that will take your coding skills to the..."
        timestamp="Jul 30, 2020"
        channel="Clever Programmer"
        title="🔴 Let Build a Tik Tok Clone with REACTJS for Beginners"
        image="https://i.ytimg.com/an_webp/kjRD1M-FS4I/mqdefault_6s.webp?du=3000&sqp=CJL7tPwF&rs=AOn4CLDYEAAy_SyYUhswMMgsxpw5yVsY0Q"
      />
      <VideoRow
        views="293,381 views"
        subs="660K"
        description="You can find awesome programing lessons here! Alsp expect progarming tips and tricks that will take your coding skills to the..."
        timestamp="Jul 30, 2020"
        channel="Clever Programmer"
        title="🔴 Let Build a Tik Tok Clone with REACTJS for Beginners"
        image="https://i.ytimg.com/an_webp/wMLwSlCvaLw/mqdefault_6s.webp?du=3000&sqp=CJDstPwF&rs=AOn4CLC6x60ZMoh_OEG5893K3ft5jXODfQ"
      />
    </div>
  );
}

export default SearchPage;
