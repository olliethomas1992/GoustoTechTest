import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchProducts, API_URL } from "../actions";
import { FETCH_PRODUCTS } from "../../types";

describe("Product Actions", () => {
    test("Should retrieve products", () => {
        let mockFetchProducts = jest.fn(() => {
            return Promise.resolve({
                data: {
                    data: mockProducts
                }
            });
        });

        axios.get = mockFetchProducts;

        return fetchProducts().then(data => {
            expect(mockFetchProducts).toHaveBeenCalled();
            expect(mockFetchProducts).toHaveBeenCalledWith(API_URL);
            expect(data).toEqual({
                type: FETCH_PRODUCTS,
                payload: mockProducts
            });
        });
    });
});

const mockProducts = [
    {
        id: "1907b434-f71d-11e5-887e-02787aad01f3",
        sku: "AP-ACH-WIN-WHI-06-P",
        title: "Camino Real Blanco Rioja"
    }
];
