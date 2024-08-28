// import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // Method-1
  // const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/ManoharNaidu")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Property</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Github Username
            </td>
            <td className="border border-gray-300 px-4 py-2">{data.name}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Avatar</td>
            <td className="border border-gray-300 px-4 py-2">
              <div className="flex justify-center items-center">
                <img src={data.avatar_url} alt="Avatar" width={200} />
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Followers</td>
            <td className="border border-gray-300 px-4 py-2">
              {data.followers}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Following</td>
            <td className="border border-gray-300 px-4 py-2">
              {data.following}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Link</td>
            <td className="border border-gray-300 px-4 py-2">
              <a href={data.html_url} className="text-blue-500 underline">
                {data.login}
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Bio</td>
            <td className="border border-gray-300 px-4 py-2">{data.bio}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Github;

// Method-2
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ManoharNaidu");
  return response.json();
};
