import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import { IContactdata } from 'src/services/contact-service';
import mjml2html from 'mjml';

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
      <mj-head>
        <mj-title>Message From Humaapi</mj-title>
       
        <mj-attributes>
          
          <mj-all font-family="Ubuntu" padding="0px"></mj-all>
          <mj-text font-weight="400" font-size="14px" color="#000000" line-height="21px"></mj-text>
          
        </mj-attributes>
         
      </mj-head>
      <mj-body background-color="#EAE8E5">
        <mj-section padding="22px" background-color="#FFFFFF">
          <mj-column width="35%" vertical-align="middle">
            <mj-image src="https://variverge.com/wp-content/uploads/2020/09/digital-direct-mail-og.png" alt="" align="center" border="none"></mj-image>
          </mj-column>
          
          <mj-column width="60%" vertical-align="middle" padding-left="10px">
           
         
            <mj-text align="left" padding="0 20px" font-size="36px" line-height="40px" font-weight="bold">Huma<span style="color:#EA6F66">api</span></mj-text>
            <mj-text align="left" padding="0 20px"><strong><span style="font-size: 30px;">⚊</span></strong><br /><br /></mj-text>
          
              <mj-text align="left" padding="0 20px"><span style="font-size: 15px;">
                <p> Cher utilisateur,</p>
                <p> Nous vous confirmons avoir reçu votre message. Nous vous remercions de l'intérêt que vous portez à notre entreprise. Nous allons étudier votre demande avec soin et vous répondrons dans les plus brefs délais.</p>
                <p> Cordialement,</p>
                <p style="font-size: 12px;">L'équipe <span style="font-weight: bold"> Humaapi </span></p>
           
                
               </span></mj-text>
            <mjml>
      
    </mjml>
    
            </mj-column>
          
        </mj-section>
       
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
  <mj-head>
    <mj-title>Message to Humaapi</mj-title>
   
    <mj-attributes>
      
      <mj-all font-family="Ubuntu" padding="0px"></mj-all>
      <mj-text font-weight="400" font-size="14px" color="#000000" line-height="21px"></mj-text>
      
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#EAE8E5">
    
    <mj-section padding="22px" background-color="#FFFFFF">
      <mj-column width="35%" vertical-align="middle">
        <mj-image src="https://variverge.com/wp-content/uploads/2020/09/digital-direct-mail-og.png" alt="" align="center" border="none"></mj-image>
      </mj-column>
      
      <mj-column width="60%" vertical-align="middle" padding-left="10px">
       
     
        <mj-text align="left" padding="0 20px" font-size="36px" line-height="40px" font-weight="bold">Huma<span style="color:#EA6F66">api</span></mj-text>
       <mj-text align="left" padding="0 20px"><span style="font-size: 15px;">We have a contact form submission</span></mj-text>
        <mj-text align="left" padding="0 20px"><strong><span style="font-size: 30px;">⚊</span></strong><br /><br /></mj-text>
      
   
       
        <mj-table padding-left="20px" table-layout="fixed" width="100%">
        <tr>
          <td style="font-size:14px;font-weight:bold;padding-bottom:10">Name</td>
          <td style="font-size:14px">: ${data.name}</td>
        </tr>
        <tr >
           <td style="font-size:14px;font-weight:bold;padding-bottom:10">Email</td>
          <td style="font-size:14px">:  ${data.email} </td>
        </tr>
          <tr >
           <td style="font-size:14px;font-weight:bold;padding-bottom:10">Company</td>
          <td style="font-size:14px">: ${data.company}</td>
        </tr>
          <tr >
           <td style="font-size:14px;font-weight:bold;padding-bottom:10">Domaine</td>
          <td style="font-size:14px">:${data.domaine}</td>
        </tr>
           <tr >
           <td style="font-size:14px;font-weight:bold;padding-bottom:10">Message </td>
          <td style="font-size:14px">: ${data.message} </td>
        </tr>
      </mj-table>
        
        <mjml>
  
</mjml>

        </mj-column>
      
    </mj-section>
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
    return res;

    // const error = <{ message: string }>err;
    // return res.status(500).json({ message: 'error', error: error.message });
  }
};

export default Contact;
