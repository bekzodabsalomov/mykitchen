import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFetch } from "../hooks/useFetch";
import { toast } from "react-toastify";
import recipeUrl from "../../data/data";

function Create() {
  const { data, isPending, error, newData } = useFetch(
    "recipeUrl",
    "POST"
  );

  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState(0);
  const [img, setImg] = useState("");
  const [method, setMethod] = useState("");

  const [ingradient, setIngradient] = useState("");
  const [ingradients, setIngradients] = useState([]);

  const addIngradient = (e) => {
    e.preventDefault();
    if (!ingradients.includes(ingradient)) {
      setIngradients((prev) => {
        return [...prev, ingradient];
      });
      setIngradient("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newData({
      title: title,
      img: img,
      cookingTime: `${cookingTime} minutes`,
      id: uuidv4(),
      method: method,
      ingradients,
    });
    toast.success("Yangi taom muofaqiyatli qoshildi");
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Create New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center pb-8"
      >
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text">Title :</span>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
            value={title}
          />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text">Ingradients:</span>
          </label>
          <div className="flex gap-3 justify-between">
            <input
              onChange={(e) => {
                setIngradient(e.target.value);
              }}
              type="text"
              placeholder="Ingradient"
              className="input input-bordered w-full max-w-xs"
              value={ingradient}
            />
            <button onClick={addIngradient} className="btn btn-primary">
              Add
            </button>
          </div>
          <h1 className="mt-2">
            Ingradients:{" "}
            {ingradients.map((ing) => {
              return <span key={ing}>{ing} , </span>;
            })}
          </h1>
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text">Cooking Time :</span>
          </label>
          <input
            onChange={(e) => setCookingTime(e.target.value)}
            type="text"
            placeholder="Time"
            className="input input-bordered w-full max-w-xs"
            value={cookingTime}
          />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text">Image Url :</span>
          </label>
          <input
            onChange={(e) => setImg(e.target.value)}
            type="url"
            placeholder="Put Image Url"
            className="input input-bordered w-full max-w-xs"
            value={img}
          />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <label className="label">
            <span className="label-text">Method :</span>
          </label>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            type="textarea"
            placeholder="Put Image Url"
            className="textarea input-bordered w-full max-w-xs"
            value={method}
          />
        </div>
        <button className="w-[320px] btn btn-primary mt-5">Create</button>
      </form>
    </div>
  );
}

export default Create;
