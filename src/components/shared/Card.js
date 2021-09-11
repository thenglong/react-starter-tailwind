import { classNames } from "../../helpers/utils";

const Card = ({ className }) => {
  return (
    <div className={classNames(`flex ${className}`)}>
      <div className="relative flex-none w-48">
        <img
          src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold">Classic Utility Jacket</h1>
          <div className="text-gray-500 text-xl font-semibold">$110.00</div>
          <div className="flex-none mt-2 w-full text-gray-500 text-sm font-medium">In stock</div>
        </div>
        <div className="flex items-baseline mb-6 mt-4">
          <div className="flex space-x-2">
            <label>
              <input
                defaultChecked
                className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-lg"
                name="size"
                type="radio"
                defaultValue="xs"
              />
              XS
            </label>
            <label>
              <input className="flex items-center justify-center w-9 h-9" name="size" type="radio" defaultValue="s" />S
            </label>
            <label>
              <input className="flex items-center justify-center w-9 h-9" name="size" type="radio" defaultValue="m" />M
            </label>
            <label>
              <input className="flex items-center justify-center w-9 h-9" name="size" type="radio" defaultValue="l" />L
            </label>
            <label>
              <input className="flex items-center justify-center w-9 h-9" name="size" type="radio" defaultValue="xl" />
              XL
            </label>
          </div>
          <div className="ml-auto text-gray-500 underline text-sm">Size Guide</div>
        </div>
        <div className="flex mb-4 text-sm font-medium space-x-3">
          <div className="flex flex-auto space-x-3">
            <button className="flex items-center justify-center w-1/2 text-white bg-black rounded-md" type="submit">
              Buy now
            </button>
            <button className="flex items-center justify-center w-1/2 border border-gray-300 rounded-md" type="button">
              Add to bag
            </button>
          </div>
          <button
            className="flex flex-none items-center justify-center w-9 h-9 text-gray-400 border border-gray-300 rounded-md"
            type="button"
            aria-label="like"
          >
            <svg width={20} height={20} fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-500 text-sm">Free shipping on all continental US orders.</p>
      </form>
    </div>
  );
};

export default Card;
