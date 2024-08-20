import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Card from "../models/card.model.js";

const createCard = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description)
    throw new ApiError(400, "All Fields Are Mandatory!");

  const card = await Card.create({
    title,
    description,
  });

  if (!card) throw new ApiError(500, "Couldn't Create A New Card!");

  res
    .status(201)
    .json(new ApiResponse(200, true, "Card Created Successfully!", card));
});

const getAllCards = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, searchQuery } = req.query;

  let query = {};

  if(searchQuery) query = { $text: { $search: searchQuery } };

  const options = {
    page,
    limit,
  };

  const data = await Card.paginate(query, options);

  if (!data) throw new ApiError(500, "Failed To Fetch Cards!");

  res.status(200).json(new ApiResponse(200, true, "Cards Fetched Successfully!", data));
});

const getCardByTitle = asyncHandler(async (req, res) => {
  const { title } = req.params;
  
  if(!title) throw new ApiError(400, "Id Is Empty!");

  const card = await Card.findOne({title});
  
  if (!card) return res.status(200).json(new ApiResponse(200, true, "No Card Found!"))

  res
    .status(200)
    .json(new ApiResponse(200, true, "Card Found!", card));
});

export { createCard, getAllCards, getCardByTitle };