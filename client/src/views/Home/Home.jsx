// React utilities
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// Components
import ProductCard from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import Loading from "../../components/Loading/Loading";
import NothingFound from "../../components/NothingFound/NothingFound";
// Actions
import {
  orderProducts,
  getAllProducts,
  filteredIntruments,
  activeLoading
} from '../../redux/actions';
// Styles
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseButton from 'react-bootstrap/CloseButton';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

export default function Home({ handleAdded, handleNotAdded }) {

  //Hooks
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allInstruments = useSelector(state => state.instruments);
  const isLoading = useSelector(state => state.isLoading);
  const [currentPage, setCurrentPage] = useState(1);
  // Getting value of the query from the url
  const [searchParams] = useSearchParams();
    const searchName = searchParams.get('name');
  const filters = []
  searchParams.forEach((value, key) => {
    filters.push([key, value]);
  });

  useEffect(() => {
    if (searchParams.toString()) {
      dispatch(filteredIntruments(searchParams.toString()));
    } else {
      dispatch(getAllProducts());
    }
    dispatch(activeLoading());
  }, [dispatch, searchParams]);

  useEffect(() => {
    setCurrentPage(1);
  }, [allInstruments]);

  useEffect(() => {
    window.scrollTo({ top: '0px', behavior: 'smooth' });
  }, [currentPage]);

  //Order's Dispatch
  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderProducts(e.target.value));
  }

  // Clear filters
  function clearFilter(filter) {
    searchParams.delete(filter);
    location.search = `?${searchParams.toString()}`;
    navigate(location);
  }

  // Pagination logic
  let idxLastItem = currentPage * 15;
  let ixdFirstItem = idxLastItem - 15;
  let pageInstruments = allInstruments.slice(ixdFirstItem, idxLastItem);
  const paginate = (number) => {
    setCurrentPage(number)
  };

  return (
    <>
      {isLoading ? <Loading /> :
        <div className="containerHome">
          <div className="aditionalContent">

            <div className="numberOfResults">
              {searchName ? <span>{searchName.toUpperCase()}</span> : null}
              <p><b>{allInstruments.length}</b> results</p>
            </div>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }} size="small" className={allInstruments.length ? null : "ocult"}>
              <InputLabel id="demo-simple-select-label">Order by</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Order by" onChange={(e) => { handleOrder(e) }}>
                <MenuItem value="Lower price">Price: Low to High</MenuItem>
                <MenuItem value="Higher price">Price: Hig to Low</MenuItem>
                <MenuItem value="Down to Up">Name: A-Z</MenuItem>
                <MenuItem value="Up to Down">Name: Z-A</MenuItem>
              </Select>
            </FormControl>
          </div>

          {filters.length ? searchName && filters.length === 1 ?
            null :
            <div className="selectedFilters">
              <span>Selected filters: </span>
              {
                filters.map(filter => {
                  return filter[0] === 'name' ?
                    null :
                    (
                      <div key={filter[0]} className="activeFilter">
                        {filter[0] === 'price' ? `Price range ${filter[1]}` : filter[1]}
                        <CloseButton onClick={() => clearFilter(filter[0])} />
                      </div>
                    )
                })
              }
            </div>
            : null}

          {allInstruments.length ?
            <>
              <div className="containerContent">
                <Filters />

                <div className="containerCards">
                  {
                    pageInstruments?.map(instrument => {
                      return (
                        <ProductCard
                          key={instrument._id}
                          id={instrument._id}
                          name={instrument.name}
                          price={instrument.price}
                          brand={instrument.brand}
                          color={instrument.color}
                          rating={Math.floor((Math.random() * 6))}
                          image={instrument.image}
                          handleAdded={handleAdded}
                          handleNotAdded={handleNotAdded}
                        />
                      )
                    })
                  }
                </div>
              </div>
              <Pagination currentPage={currentPage} postPerPage={15} totalPosts={allInstruments.length} paginate={paginate} />
            </>
            : <NothingFound />}
        </div>
      }
    </>
  )
}