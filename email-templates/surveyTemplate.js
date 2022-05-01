import { appKeys } from '../config/keys.js'

export default (survey) => {
  const likeRoute = `${appKeys.host}/surveys/${survey.id.toString()}/response/like`

  const dislikeRoute = `${appKeys.host}/surveys/${survey.id.toString()}/response/dislike`
  return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>I am glad that you are here!</h3>
                <p>Please answer the following question:</p>
                <p>${survey.body}</p>
                <div>
                    <a 
                        href="${likeRoute}" 
                        style="
                            margin-right: 5px;
                            color: #fff;
                            background-color: #26a69a;
                            text-align: center;
                            letter-spacing: .5px;
                            text-decoration: none;
                            border: none;
                            border-radius: 2px;
                            height: 36px;
                            line-height: 36px;
                            padding: 0 16px;
                            text-transform: uppercase;
                            vertical-align: middle;
                        ">
                        Yes
                    </a>

                    <a 
                        href="${dislikeRoute}" 
                        style="
                            margin-left: 5px;
                            background-color: #E57373;   
                            text-decoration: none;
                            color: #fff;
                            text-align: center;
                            letter-spacing: .5px;
                            border: none;
                            border-radius: 2px;
                            height: 36px;
                            line-height: 36px;
                            padding: 0 16px;
                            text-transform: uppercase;
                        ">
                        No
                    </a>
                </div>
            </div>
        </body>
    </html>
  `
}
