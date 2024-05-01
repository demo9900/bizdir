"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductsList = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session, status } = useSession();

    const getProductsData = async () => {
        try {
            setLoading(true);
            const res = await fetch(process.env.BACKEND_URL + "/api/product", {
                headers: {
                    authorization: "Bearer " + session.jwt,
                },
            });

            const data = await res.json();

            console.log(data);
            setProductData(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (status === "authenticated") getProductsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    const deleteProduct = async (id) => {
        try {
            const res = await fetch(
                process.env.BACKEND_URL + "/api/event/" + id,
                {
                    headers: {
                        authorization: "Bearer " + session.jwt,
                    },
                    method: "DELETE",
                }
            );
            getProductsData();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <>Loading...</>;

    return (
        <table className="responsive-table bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    {/*<th>Rating</th>*/}
                    <th>Views</th>
                    {/*<th>Expiry on</th>*/}
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Preview</th>
                </tr>
            </thead>
            <tbody>
                {productData.map((product, idx) => {
                    return (
                        <tr key={product._id}>
                            <td>{idx + 1}</td>
                            <td>
                                <img
                                    alt={product.product_name}
                                    src={product.images[0]}
                                />
                                {product.product_name} <span>26, Mar 2021</span>
                            </td>
                            {/*<td><span className="db-product-rat">*/}
                            {/*</span></td>*/}
                            <td>
                                <span className="db-list-rat">
                                    {!!product.product_views
                                        ? product.product_views
                                        : 0}
                                </span>
                            </td>
                            {/*<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                            <td>
                                <span className="db-list-ststus">
                                    Active
                                    {product.product_status}
                                </span>
                            </td>
                            <td>
                                <Link
                                    href="/edit-product?code=PROD036"
                                    className="db-list-edit"
                                >
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <button
                                    onClick={() => deleteProduct(product._id)}
                                >
                                    Delete
                                </button>
                            </td>
                            <td>
                                <Link
                                    href="/product-details"
                                    className="db-list-edit"
                                    target="_blank"
                                >
                                    Preview
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ProductsList;
