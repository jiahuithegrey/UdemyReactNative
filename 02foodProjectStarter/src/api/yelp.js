import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XpPUdRa5yHF_mvDPYHteADjeKFz-noskxF6KQfjHJPxafJzAfhIXcstq9ZQoZBUS428UmQBsLgQ3SqKrj_WnRD6fCSxq_A8Gt4JMRpH7LDkgcLoWwoZyamRyIq7-XnYx",
  }
});

//yelp.get('/search)
