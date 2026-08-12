from flask import Flask

application = Flask(__name__)

@application.route("/")
def home():
    return "Hello! Simple Python App is running on AWS Elastic Beanstalk."

if __name__ == "__main__":
    application.run()