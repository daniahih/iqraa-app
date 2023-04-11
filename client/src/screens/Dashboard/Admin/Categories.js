import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { HiPlus } from "react-icons/hi";
import Table2 from "../../../components/Table2";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getAllCategories,
} from "../../../Redux/Actions/CategoriesActions";
import { toast } from "react-hot-toast";
import { Empty } from "../../../components/notifiations/Empty";
import Loader from "./../../../components/notifiations/Loader";
import CategoryModal from "../../../components/Modals/CategoryModal";

function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector(
    (state) => state.categoriesList
  );
  const { isError: deleteError, isSuccess } = useSelector(
    (state) => state.deleteCategory
  );
  const OnEditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };
  // admin delete category handler
  const adminDeleteUserHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategory(id));
    }
  };
  useEffect(() => {
    // get all categories
    dispatch(getAllCategories());

    if (deleteError) {
      toast.error(deleteError);
      dispatch({
        type: "DELETE_CATEGORY_RESET",
      });
    }
    if (isSuccess) {
      dispatch({
        type: "DELETE_CATEGORY_RESET",
      });
    }
  }, [modalOpen, deleteError, dispatch, isSuccess]);
  return (
    <div className="bg-main">
      <CategoryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2 ">
            <h2 className="text-xl font-bold">Categories </h2>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-star flex-rows gap-4 font-medium transtions hover:bg-star border-star text-white py-2 px-4 rounded "
            >
              <HiPlus /> Create
            </button>
          </div>
          {isLoading ? (
            <Loader />
          ) : categories?.length > 0 ? (
            <Table2
              data={categories}
              users={false}
              OnEditFunction={OnEditFunction}
              onDeleteFunction={adminDeleteUserHandler}
            />
          ) : (
            <Empty message="You have no category" />
          )}
        </div>
      </SideBar>
    </div>
  );
}

export default Categories;
