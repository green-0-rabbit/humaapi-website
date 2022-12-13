import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import { IContactdata } from 'src/components/services/contact-service';
import mjml2html from 'mjml';

type ContactType = Omit<IContactdata, 'captchaToken'>;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data: ContactType = req.body;
  const senderEmail = process.env.SMTP_USER;
  const senderPassword = process.env.SMTP_PASSWORD;
  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.fr',
    port: 465,
    secure: true,
    auth: {
      user: senderEmail,
      pass: senderPassword
    }
  });

  try {
    const aknowledgeOutputMJML = mjml2html(
      `
      <mjml>
      <mj-body>
        <mj-raw>
          <!-- Company Header -->
        </mj-raw>
        <mj-section background-color="#f0f0f0">
          <mj-column>
            <mj-text font-style="italic" font-size="20px" color="#626262">Humaapi</mj-text>
          </mj-column>
        </mj-section>
        <mj-raw>
          <!-- Image Header -->
        </mj-raw>
        <mj-section background-url="https://k2bmt9x7.directus.app/assets/b4178a49-75d5-4979-9a89-6f2bf9843518/w=640&q=20" background-size="cover" background-repeat="no-repeat">
          <mj-column width="600px">
            <mj-text align="center" color="#000" font-size="40px" font-family="Helvetica Neue">Welcome on Blazers</mj-text>
          </mj-column>
        </mj-section>
        <mj-raw>
          <!-- Intro text -->
        </mj-raw>
        <mj-section background-color="#fafafa">
          <mj-column width="400px">
            <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">My Awesome Text</mj-text>
            <mj-text color="#525252">${data.message}</mj-text>
            <mj-button background-color="#F45E43" href="#">Learn more</mj-button>
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
      <mj-body>
        <!--  Header -->
        <mj-section>
          <mj-column>
    
            <mj-text font-size="48px" color="#626262">Blazers Form</mj-text>
    
            <mj-divider border-color="#3b00a2"></mj-divider>
    
            <mj-text font-size="20px" color="#3b00a2" font-family="helvetica">You have a contact form submission</mj-text>
          </mj-column>
        </mj-section>
        <!--  Email -->
        <mj-section>
          <mj-column>
            <mj-text font-size="16px" color="#3b00a2" font-family="helvetica">
              Email :
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-text color="#525252">
              ${data.email}
            </mj-text>
          </mj-column>
        </mj-section>
        <!--  Phone -->
        <mj-section>
          <mj-column>
            <mj-text font-size="16px" color="#3b00a2" font-family="helvetica">
              Phone :
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-text color="#525252">
              ${data.company}
            </mj-text>
          </mj-column>
        </mj-section>
        <!--  Domaine -->
        <mj-section>
          <mj-column>
            <mj-text font-size="16px" color="#3b00a2" font-family="helvetica">
              Domaine :
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-text color="#525252">
              ${data.domaine}
            </mj-text>
          </mj-column>
        </mj-section>
            
        <!--  Message -->
        <mj-section>
          <mj-column>
            <mj-text font-size="16px" color="#3b00a2" font-family="helvetica">
              Request :
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-text color="#525252">
              ${data.message}
            </mj-text>
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
    const error = <{ message: string }>err;
    return res.status(500).json({ message: 'error', error: error.message });
  }
};
