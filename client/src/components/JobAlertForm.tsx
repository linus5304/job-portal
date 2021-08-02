import React from "react";

interface JobAlertFormProps {}

export const JobAlertForm: React.FC<JobAlertFormProps> = ({}) => {
  return (
    <div className="container">
      <div className="job-alert-section">
        <div>
          <h1>Sign up for job alerts</h1>
          <p>Get job alerts straight to your inbox.</p>
          <p>
            Enter your email to get started. You will be able to unsubscribe at
            any moment.
          </p>
        </div>
        <div>
          <form action="">form</form>
        </div>
      </div>
    </div>
  );
};
