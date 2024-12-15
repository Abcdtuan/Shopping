
import CartPage from "../pages/HomePage/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import MenShirtPage from "../pages/MenShirtPage/MenShirtPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage  from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/product-detail',
        page: ProductDetailPage,
        isShowHeader: true
    },
    {
        path: '/cart',
        page: CartPage,
        isShowHeader: true
    },
    {
        path: '/cart',
        page: CartPage,
        isShowHeader: true
    },
    {
        path: '/menshirt',
        page: MenShirtPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]