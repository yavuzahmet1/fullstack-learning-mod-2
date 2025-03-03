describe('Login Test', () => {
  it('should log in successfully', () => {
    // 1. Login sayfasına git
    cy.visit('http://localhost:3000/');

    // 2. Kullanıcı adı ve şifre alanlarını doldur
    cy.get('#username').type('testuser'); // Kullanıcı adı alanı
    cy.get('#password').type('password123'); // Şifre alanı

    // 3. Login butonuna tıkla
    cy.get('form').submit(); // Formu gönder veya login butonuna tıkla

    // 4. Başarılı login sonrası doğru sayfaya yönlendirildiğini kontrol et
    cy.url().should('include', '/dashboard'); // Dashboard sayfasına yönlendirildi mi?

    // 5. Hoş geldin mesajını kontrol et
    cy.contains('Welcome, testuser'); // Hoş geldin mesajı var mı?
  });
});