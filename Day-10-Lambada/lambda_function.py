def lambda_handler(event, context):

    html = """
    <!DOCTYPE html>

    <html>

    <head>

        <meta charset="UTF-8">

        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">

        <title>My AWS Lambda Website</title>

        <style>

            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: #f4f7fb;
                text-align: center;
            }

            header {
                background: #232f3e;
                color: white;
                padding: 25px;
            }

            header h2 {
                margin: 0;
            }

            .container {
                padding: 60px 20px;
            }

            .card {
                background: white;
                max-width: 600px;
                margin: 30px auto;
                padding: 35px;
                border-radius: 12px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            }

            h1 {
                color: #232f3e;
                font-size: 42px;
            }

            p {
                font-size: 20px;
                color: #555;
            }

            button {
                background: #ff9900;
                border: none;
                padding: 15px 30px;
                font-size: 18px;
                border-radius: 8px;
                cursor: pointer;
            }

            button:hover {
                background: #ec8b00;
            }

            footer {
                margin-top: 50px;
                padding: 20px;
                background: #232f3e;
                color: white;
            }

        </style>

    </head>

    <body>

        <header>

            <h2>My AWS Website</h2>

        </header>


        <div class="container">

            <div class="card">

                <h1>Hello from AWS Lambda! 🚀</h1>

                <p>
                    This website is running using
                    Python and AWS Lambda.
                </p>

                <p>
                    No EC2 server required.
                </p>

                <button onclick="showMessage()">

                    Click Me

                </button>

                <p id="message"></p>

            </div>

        </div>


        <footer>

            Hosted with AWS Lambda

        </footer>


        <script>

            function showMessage() {

                document.getElementById("message").innerHTML =
                    "Lambda is working successfully! 🎉";

            }

        </script>

    </body>

    </html>
    """

    return {
        "statusCode": 200,

        "headers": {
            "Content-Type": "text/html; charset=UTF-8"
        },

        "body": html
    }