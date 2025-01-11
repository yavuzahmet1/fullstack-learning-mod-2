import './App.css';
import axios from "axios";
import { useEffect } from "react"


const BASE_URL = "https://jsonplaceholder.typicode.com"

function App() {
  const getAllUsers = async () => {
    let res = await axios.get(BASE_URL + "/todos")
    console.log(res.data)
  }

  const updateUser = async (userId, updateUser) => {

    //PUT: veri güncellemek için kullanılır
    await axios.put(`${BASE_URL}/users/${userId}`, updateUser);
  }

  // const getUserById = async (userId) => {
  //   let res = await axios.get(`${BASE_URL}/todos/${userId}`)
  //   console.log(res.data)

  // }

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse.data)
  }

  //for sync and async
  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    return response.data.postId;
  }

  const getPostById = async (postId) => {
    const response = await axios.get(`${BASE_URL}/users/${postId}`)
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserById(4);//await yazdık çünkü panding olayını çözmüş olduk.
    const postData = await getPostById(postId)
    console.log(postId)

    //!ilk önce userId üzerinden veriyi çektik, çekilen verinin postId sini dönderdik, sonrasında döndürülen postId user içerisinde ilgili postun id si ile çağırdık ve çağrıan bu post detaylarını görüntüledik. buradaki ince durum await ile önce usera ait işlemi beklettik donrasında diğer await ile posta ait verinin çekilmesi işlemini yaptık.

    //* awaitler olmasaydı aynı andaki işlemler çakışadak ve "Uncaught (in promise)" hatası alacaktık bu yüzden await ile sırayla beklettik

    //*bizim atmış olduğumuz HTTP istekleri asenkron çalışır, asenkron çalışan yapıları da eğerki yönetmezsek işlemler çakışacak, işte bu asenkron çalışan yapıları senkrona çevirebilmek için asyn-await yapıları kullanılır ve kullanıldığında da  bir işlem biter sonraki işlem baslar o işlem de biter sonraki işlemler başlar böylece kod mimarisini bozmamış oluruz. 

    //* şöyle düşünelim getPostById(postId) önünde await olmasaydı bu defa da console.log(postId) ile çakışılacaktı bu yüzden getPostById(postId) önüne de await koyduk.
  }

  useEffect(() => {
    // getAllUsers()
    // getUserById(3)
    // deleteUserById(3)
    getPost() //niye panding modunda çünkü çağırılan fonksiyonu await ile bekletmemiz gerekiyor

  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
