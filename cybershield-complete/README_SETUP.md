# CyberShield Setup Guide

## Prerequisites

- Python 3.7+
- pip

## Installation

1. Clone the repository:

   ```bash
   git clone [repository_url]
   cd cybershield-complete
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Linux/macOS
   venv\Scripts\activate  # On Windows
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements_secure.txt
   ```

4. Configure the environment variables:

   - Create a `.env` file based on the `.env.secure` template.
   - Set the `SECRET_KEY` environment variable to a strong, random value.
   - Set the `DATABASE_URL` environment variable if you are using a database.

5. Run the application:

   ```bash
   python app_secure.py
   ```

6. Disable debug mode in production:

   - Set the `FLASK_DEBUG` environment variable to `0` to disable debug mode.
   ```bash
   export FLASK_DEBUG=0
