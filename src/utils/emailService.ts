// // Primary email service using Web3Forms (free service)
// export const sendVisitorNotification = async (
//   visitorData: any
// ): Promise<boolean> => {
//   try {
//     const formData = new FormData();
//     formData.append('access_key', '268d8879-4376-4689-8925-98589fe62e9b');
//     formData.append(
//       'subject',
//       `🎯 New Portfolio Visitor - ${new Date().toLocaleDateString()}`
//     );
//     formData.append('from_name', 'Portfolio Visitor Tracker');
//     formData.append('from', 'pk7437343@gmail.com');
//     formData.append('to', 'princekumar27124@gmail.com');
//     formData.append(
//       'message',
//       `🎉 New visitor to your portfolio!

// 📅 Time: ${new Date(visitorData.timestamp).toLocaleString()}
// 📄 Page: ${visitorData.page}
// 📱 Device: ${visitorData.userAgent}
// 🔗 Referrer: ${visitorData.referrer || 'Direct visit'}
// 🌐 IP: ${visitorData.ip}

// Someone is checking out your amazing portfolio! 🚀`
//     );

//     const response = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {
//       console.log('Email notification sent successfully via Web3Forms');
//       return true;
//     } else {
//       console.error('Web3Forms error:', await response.text());
//       return false;
//     }
//   } catch (error) {
//     console.error('Error sending email via Web3Forms:', error);
//     return false;
//   }
// };

// // Contact form email service using Web3Forms
// export const sendContactMessage = async (contactData: {
//   name: string;
//   email: string;
//   message: string;
// }): Promise<boolean> => {
//   try {
//     const formData = new FormData();
//     formData.append('access_key', '268d8879-4376-4689-8925-98589fe62e9b');
//     formData.append(
//       'subject',
//       `💼 New Contact Message from ${contactData.name}`
//     );
//     formData.append('from_name', contactData.name);
//     formData.append('from', contactData.email);
//     formData.append('to', 'princekumar27124@gmail.com');
//     formData.append(
//       'message',
//       `📧 New contact message from your portfolio!

// 👤 Name: ${contactData.name}
// 📧 Email: ${contactData.email}

// 💬 Message:
// ${contactData.message}

// ---
// Sent from your portfolio contact form`
//     );

//     const response = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {
//       console.log('Contact message sent successfully via Web3Forms');
//       return true;
//     } else {
//       console.error('Web3Forms contact error:', await response.text());
//       return false;
//     }
//   } catch (error) {
//     console.error('Error sending contact message via Web3Forms:', error);
//     return false;
//   }
// };

// // Alternative using EmailJS (requires setup)
// export const sendEmailJSNotification = async (visitorData: any) => {
//   try {
//     const response = await fetch(
//       'https://api.emailjs.com/api/v1.0/email/send',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           service_id: 'YOUR_EMAILJS_SERVICE_ID',
//           template_id: 'YOUR_EMAILJS_TEMPLATE_ID',
//           user_id: 'YOUR_EMAILJS_USER_ID',
//           template_params: {
//             to_email: 'princekumar27124@gmail.com',
//             from_name: 'Portfolio Visitor Tracker',
//             subject: `🎯 New Portfolio Visitor - ${new Date().toLocaleDateString()}`,
//             message: `New visitor to your portfolio!

// Time: ${new Date(visitorData.timestamp).toLocaleString()}
// Page: ${visitorData.page}
// User Agent: ${visitorData.userAgent}
// Referrer: ${visitorData.referrer || 'Direct visit'}

// Someone is checking out your amazing portfolio! 🚀`,
//           },
//         }),
//       }
//     );

//     return response.ok;
//   } catch (error) {
//     console.error('Error sending EmailJS notification:', error);
//     return false;
//   }
// };

// Primary email service using Web3Forms (free service)
export const sendVisitorNotification = async (
  visitorData: any
): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append('access_key', '268d8879-4376-4689-8925-98589fe62e9b');
    formData.append(
      'subject',
      `🎯 New Portfolio Visitor - ${new Date().toLocaleDateString()}`
    );
    formData.append('from_name', 'Portfolio Visitor Tracker');
    formData.append('from', 'pk7437343@gmail.com');
    formData.append('to', 'princekumar27124@gmail.com');
    formData.append(
      'message',
      `🎉 New visitor to your portfolio!

📅 Time: ${new Date(visitorData.timestamp).toLocaleString()}
📄 Page: ${visitorData.page}
📱 Device: ${visitorData.userAgent}
🔗 Referrer: ${visitorData.referrer || 'Direct visit'}
🌐 IP: ${visitorData.ip}

Someone is checking out your amazing portfolio! 🚀`
    );

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Email notification sent successfully via Web3Forms');
      return true;
    } else {
      console.error('Web3Forms error:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('Error sending email via Web3Forms:', error);
    return false;
  }
};

// Contact form email service using Web3Forms
export const sendContactMessage = async (contactData: {
  name: string;
  email: string;
  message: string;
}): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append('access_key', '268d8879-4376-4689-8925-98589fe62e9b');
    formData.append(
      'subject',
      `💼 New Contact Message from ${contactData.name}`
    );
    formData.append('from_name', contactData.name);
    formData.append('from', contactData.email);
    formData.append('to', 'princekumar27124@gmail.com');
    formData.append(
      'message',
      `📧 New contact message from your portfolio!

👤 Name: ${contactData.name}
📧 Email: ${contactData.email}

💬 Message:
${contactData.message}

---
Sent from your portfolio contact form`
    );

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Contact message sent successfully via Web3Forms');
      return true;
    } else {
      console.error('Web3Forms contact error:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('Error sending contact message via Web3Forms:', error);
    return false;
  }
};

// Alternative using EmailJS (requires setup)
export const sendEmailJSNotification = async (visitorData: any) => {
  try {
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_EMAILJS_SERVICE_ID',
          template_id: 'YOUR_EMAILJS_TEMPLATE_ID',
          user_id: 'YOUR_EMAILJS_USER_ID',
          template_params: {
            to_email: 'princekumar27124@gmail.com',
            from_name: 'Portfolio Visitor Tracker',
            subject: `🎯 New Portfolio Visitor - ${new Date().toLocaleDateString()}`,
            message: `New visitor to your portfolio!

Time: ${new Date(visitorData.timestamp).toLocaleString()}
Page: ${visitorData.page}
User Agent: ${visitorData.userAgent}
Referrer: ${visitorData.referrer || 'Direct visit'}

Someone is checking out your amazing portfolio! 🚀`,
          },
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error('Error sending EmailJS notification:', error);
    return false;
  }
};
