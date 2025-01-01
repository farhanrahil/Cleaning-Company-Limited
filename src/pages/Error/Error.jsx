import { useNavigate } from "react-router-dom";
import Container from "../../components/shared/Container";
import { FaArrowLeft } from "react-icons/fa";


const Error = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container>
                <div className='max-w-[568px] mx-auto p-6'>
                    <div className="image">
                        <img src="/error01.png" alt="" className='w-full md:max-w-[568px]' />
                    </div>
                    <div className="content">
                        <p className='text-center text-[#152970] text-2xl font-bold font-josefin'>ooPs! The page you requested was not found!</p>
                        <div className='flex gap-6 justify-center items-center'>
                            <button onClick={() => navigate(-1)} className="flex items-center text-xl gap-1 mt-6   font-josefin font-semibold  text-[#FB2E86] rounded-sm  capitalize"><FaArrowLeft className='text-xl' /> Go back</button>
                            <button onClick={() => navigate('/')} className="block mt-6  text-[16px] font-josefin font-semibold py-3 px-5 bg-[#FB2E86] text-white rounded-sm  capitalize">Back To Home</button>

                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Error;