import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BreadCrumb from "../components/ui/BreadCrumb";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const allProducts = useSelector((s) => s.products.allProducts);

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const found = allProducts.find((p) => p.id === id);

                if (!found) {
                    if (allProducts.length > 0) {
                        navigate("/404");
                        return;
                    }
                } else {
                    setProduct(found);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (allProducts.length > 0) {
            fetchProduct();
        }
    }, [id, allProducts, navigate]);

    if (!product && loading) {
        return null; 
    }

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Shop", path: "/shop" },
        {
            label: product.category_name,
            path: `/shop?category=${product.category_id}`,
        },
        { label: product.title, path: `/product/${product.id}` },
    ];

    return (
        <>
            <div className="bg-stone-50 pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <BreadCrumb items={breadcrumbs} />

                    <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/2 p-4 md:p-8 border-b lg:border-b-0 lg:border-r border-stone-100">
                                <ProductGallery
                                    images={product.images}
                                    title={product.title}
                                    categoryId={product.category_id}
                                />
                            </div>
                            <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12">
                                <ProductInfo product={product} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <ProductTabs product={product} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
