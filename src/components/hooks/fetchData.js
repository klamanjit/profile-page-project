import { ref } from "vue";

const mainUrl = `https://profile-d1051-default-rtdb.asia-southeast1.firebasedatabase.app/`;
const errorMessage = ref("");

async function usePutData(userName, userEmail, userMessage) {
  try {
    const requestOption = {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        userEmail: userEmail,
        userMessage: userMessage,
      }),
    };

    const url = `${mainUrl}/${userName}.json`;
    const response = await fetch(url, requestOption);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error.message || `Fail to post data`);
    }
  } catch (err) {
    errorMessage.value = `fail to fetch, please try again later`;
    console.log(err);
  }
}

export { errorMessage, usePutData };
