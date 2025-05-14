import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Проверка метода req.method !== 'POST' здесь не нужна,
  // так как имя функции POST уже гарантирует, что это POST запрос.

  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: 'Номер телефона обязателен' }, { status: 400 });
    }

    // Конфигурация Nodemailer
    // Переменные окружения должны быть доступны на сервере
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true', // true для 465, false для других портов
      auth: {
        user: process.env.SMTP_USER, // Ваш SMTP логин
        pass: process.env.SMTP_PASS, // Ваш SMTP пароль
      },
      tls: {
        // ДЛЯ ОТЛАДКИ: Попробуйте установить в false, если у вас проблемы с SSL/TLS
        // В продакшене должно быть process.env.SMTP_REJECT_UNAUTHORIZED === 'true' или просто true
        rejectUnauthorized: false, 
      },
      // ДЛЯ ОТЛАДКИ: Добавьте это для более подробных логов от Nodemailer
      logger: true,
      debug: true 
    });

    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Форма обратного звонка'}" <${process.env.EMAIL_FROM_ADDRESS || process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO, // Email, куда будут приходить заявки
      subject: 'Новая заявка на обратный звонок с сайта',
      text: `Поступила новая заявка на обратный звонок.\nТелефон клиента: ${phone}`,
      html: `<p>Поступила новая заявка на обратный звонок.</p><p><b>Телефон клиента:</b> ${phone}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Запрос успешно отправлен' }, { status: 200 });

  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    // В error.message может быть более детальная информация от Nodemailer
    const errorMessage = error instanceof Error ? error.message : 'Внутренняя ошибка сервера при отправке email.';
    return NextResponse.json({ error: 'Не удалось отправить запрос. Пожалуйста, попробуйте позже.', details: errorMessage }, { status: 500 });
  }
} 