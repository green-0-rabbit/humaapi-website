import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import { IContactdata } from 'src/services/contact-service';
import mjml2html from 'mjml';
import mailImage from '../../../../public/assets/img/boxmailillustration.png'

type ContactType = Omit<IContactdata, 'captchaToken'>;

const Contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: ContactType = req.body;
  const senderEmail = process.env.SMTP_USER;
  const senderPassword = process.env.SMTP_PASSWORD;
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com', // smtp-mail.outlook.com or smtp.office365.com
    port: 587, // 587
    // secure: true,
    service: 'hotmail',
    auth: {
      user: senderEmail,
      pass: senderPassword
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    const aknowledgeOutputMJML = mjml2html(
      `
      <mjml>
  <mj-body>
    
    <mj-section background-color="white">
            <mj-group>
              <mj-column>
        <mj-image width="800px" height="200px"  padding="0" src="https://variverge.com/wp-content/uploads/2020/09/digital-direct-mail-og.png"></mj-image>
      </mj-column>
               <mj-column border="1px solid #ddd">
                 
        <mj-text font-size="28px"  font-family="Ubuntu-Bold" color="black">
          <h2>Huma<span style="color:#EA6F66">api</span></h2>
          
                  
         </mj-text>
                
             
            
        <mj-text font-size="18px" color="#525252">Your message has been received. Thanks</mj-text>
      </mj-column>
</mj-group>
      
      
      
    </mj-section>
    <mj-raw>
      <!-- Icons -->
    </mj-raw>
  </mj-body>
</mjml>
`,
      {
        keepComments: false,
        validationLevel: 'strict'
      }
    );
    const formSubmissionDataMJML = mjml2html(
      `
      <mjml>
  <mj-body>
    
    <mj-section background-color="white">
            <mj-group>
              <mj-column>
        <mj-image width="200px"  padding="0" src="https://variverge.com/wp-content/uploads/2020/09/digital-direct-mail-og.png"></mj-image>
      </mj-column>
               <mj-column border="1px solid #ddd">
                 
        <mj-text font-size="28px"  font-family="Ubuntu-Bold" color="black">
          <h2>Huma<span style="color:#EA6F66">api</span></h2>
          
                  
         </mj-text>
                
                         <mj-text   font-size="26px" font-family="Helvetica Neue" >Name: <span style="font-size:22px">${data.name}</span> </mj-text>
            <mj-text  font-size="26px" font-family="Helvetica Neue" >Email:  <span style="font-size:22px">${data.email}</span></mj-text>
            <mj-text  font-size="26px" font-family="Helvetica Neue" >Company:  <span style="font-size:22px">${data.company}</span></mj-text>
            <mj-text  font-size="26px" font-family="Helvetica Neue" >Domaine:  <span style="font-size:22px">${data.domaine}</span></mj-text>
            <mj-text  font-size="26px" font-family="Helvetica Neue" >Message:  <span style="font-size:22px">${data.message}</span></mj-text>
           
            
        <mj-text color="#525252">We have a contact from submission.</mj-text>
      </mj-column>
</mj-group>
      
      
      
    </mj-section>
    <mj-raw>
      <!-- Icons -->
    </mj-raw>
  </mj-body>
</mjml>
`,
      {
        keepComments: false,
        validationLevel: 'skip'
      }
    );
    // send to Humaapi
    transporter.sendMail({
      from: senderEmail,
      sender: senderEmail,
      to: data.email,
      subject: `Aknowledge of receipt ${data.company}`,
      html: aknowledgeOutputMJML.html
    });
    // send to Humaapi
    transporter.sendMail({
      from: senderEmail,
      sender: data.email,
      to: senderEmail,
      subject: `Form submission from ${data.company}`,
      html: formSubmissionDataMJML.html
    });

    return res
      .status(200)
      .json({ message: 'your request was successfully submitted' });
  } catch (err) {
    console.log(err);
    return res;

    // const error = <{ message: string }>err;
    // return res.status(500).json({ message: 'error', error: error.message });
  }
};

export default Contact;
