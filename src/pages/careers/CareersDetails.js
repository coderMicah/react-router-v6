import { useLoaderData, useParams } from "react-router-dom";

function CareersDetails() {
  const { id } = useParams();
  const  career  = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary:{career.salary}</p>
      <p>Location:{career.location}</p>

      <div className="details">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        consequuntur voluptatibus cumque architecto perspiciatis inventore
        obcaecati molestiae velit exercitationem ab iusto mollitia reiciendis,
        harum id in quasi sequi. Voluptatibus, laboriosam.
      </div>
    </div>
  );
}

export default CareersDetails;

export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;
  const resp = await fetch(`http://localhost:4000/careers/${id}`);

  if(!resp.ok){
     throw new Error('career not found')
  }

  return resp.json();
};
