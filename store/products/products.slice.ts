import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { substrSearch } from "@/utils";
import { ProductEntity } from "./products.interface";

interface IProductsSlice {
  product: null | ProductEntity;
  productId: number;
  products: null | ProductEntity[];
  filteredProducts: ProductEntity[];
  totalProducts: number;
}

const initialState: IProductsSlice = {
  product: null,
  productId: -1,
  products: null,
  filteredProducts: [],
  totalProducts: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductEntity>) => {
      state.product = action.payload;
    },
    setProductId: (state, action: PayloadAction<number>) => {
      state.productId = action.payload;
    },
    setProducts: (state, action: PayloadAction<ProductEntity[]>) => {
      let products = action.payload;
      state.products = products;
      state.totalProducts = products.length;
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      let query = action.payload;
      state.filteredProducts =
        state.products?.filter((product) => substrSearch(product, query)) || [];
    },
  },
  extraReducers: (builder) => {},
});

export const { reducer: productsReducer, actions: productsActions } =
  productsSlice;
