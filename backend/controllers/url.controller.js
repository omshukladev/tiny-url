import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Url } from "../models/url.model.js";
import { nanoid } from "nanoid";

const shortenUrl = asyncHandler(async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    throw new apiError(401, "Original URL is required");
  }
  const shortUrl = nanoid(8); // e.g., "A3bX9zLp"

  const fullShortUrl = `${req.protocol}://${req.get("host")}/api/${shortUrl}`;
  // const fullShortUrl = `${process.env.BASE_URL || "http://localhost:4000"}/${shortUrl}`;

  //  generate full short URL

  const url = await Url.create({
    originalUrl,
    shortUrl,
  });

  // making response data custom
  const responseData = {
    ...url.toObject(),
    shortUrl: fullShortUrl, // override with full short URL for frontend.
    // replaces `shortUrl` with full link
  };

  return res.status(201).json(new apiResponse(201, responseData, "Short URL created successfully"));
});

const redirectUrl = asyncHandler(async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.findOne({ shortUrl });
  console.log("url found", url);
  if (!url) {
    return res.status(404).json(new apiResponse(404, null, "Short URL not found"));
  }
  url.clickCount += 1;
  await url.save();

  return res.redirect(url.originalUrl);
});

export { shortenUrl, redirectUrl };

// User clicks → https://yourdomain.com/s5kWv4P0
//                   ↓
//         Your backend receives GET request
//                   ↓
//      Finds short code in database (s5kWv4P0)
//                   ↓
//      Increments clickCount
//                   ↓
//      Redirects user to:
//      https://www.youtube.com/watch?v=q8F9swdTMio...

//-----
// Using .toObject() removes all the extra Mongoose stuff and gives you just a plain JavaScript object with the data.
// ...url.toObject()
// This is using the spread operator (...) in JavaScript to convert a Mongoose document (url) into a plain JavaScript object, and then copy all its properties into a new object.
